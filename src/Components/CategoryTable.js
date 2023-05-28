import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Pagination } from 'react-bootstrap';
import '../App.css';

// for firebase
import { storage } from '../firebase/firebase';
import {ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'




const CategoryTable = () => {

// for firebase
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [uploading, setUploading] = useState(true)


  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [newCategory, setNewCategory] = useState({ name: '', description: '', img: '' });
  const [editCategory, setEditCategory] = useState({ _id: '', name: '', description: '', img: '' });

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

  // for firebase
  const handleImageFire = (e) => {
    setUploading(true)
    const file = e.target.files[0];
       //  console.log(file)

    if (!file) return;

    const storageRef = ref(storage, `SlewBites/images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
       // console.log(progress)
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('before')
          setImgUrl(downloadURL)
          setUploading(false)
          setNewCategory({ ...newCategory, ['img']: downloadURL});

          //console.log(imgUrl)
        });
      }
    );

}

// useEffect(() => {
//   console.log(progresspercent,'img here',imgUrl, newCategory); // Verify if the imgUrl is updated
// }, [imgUrl,progresspercent, newCategory]);


    // fetch data from API
  const url = 'http://localhost:3000/api/categories';

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
 
    

    fetchApiData(url);
  }, []);

 

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleEditModal = (category) => {
    setEditCategory(category);
    setShowEditModal(true);
  };
     //delete data
  const handleDelete = (id) => {
    const url = `http://localhost:3000/api/categories/${id}`;
    const deleteApiData = async (url) => {
      try {
        await fetch(url, { method: 'DELETE' });
        const updatedCategories = categories.filter((category) => category._id !== id);
        setCategories(updatedCategories);
      } catch (error) {
        console.log(error);
      }
    };
    deleteApiData(url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditCategory({ ...editCategory, [name]: value });
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    setShowAddModal(false);
    const { name, description, img } = newCategory;
    const requestBody = { name, description, img };
    const postApiData = async (url) => {
      try {
        await fetch(url, {
          method: 'post',
          body: JSON.stringify(requestBody),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    postApiData(url);
    fetchApiData(url);
  };

  const handleEditCategory = (e) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/categories/${editCategory._id}`;
    const editApiData = async (url) => {
      try {
        await fetch(url, {
          method: 'put',
          body: JSON.stringify(editCategory),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } catch (error) {
        console.log(error);
      }
    };
    editApiData(url);
    const updatedCategories = categories.map((category) => {
      if (category._id === editCategory._id) {
        return editCategory;
      }
      return category;
    });
    setCategories(updatedCategories);
    setEditCategory({ id: '', name: '', description: '', img: '' });
    setShowEditModal(false);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentCategories.map((category) => (
            <tr key={category._id}>
              <td>{category._id}</td>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td><a href={category.img} target='_blank'><img src={category.img} height={30}/></a></td>
              <td>
                <Button variant="info" onClick={() => handleEditModal(category)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(category._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleAddModal}>
        Add Category
      </Button>

      <Modal show={showAddModal} onHide={handleAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddCategory}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newCategory.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={newCategory.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formImg">
              <Form.Label>Image {uploading && progresspercent>0 && `is uploaded ${progresspercent} %` }</Form.Label>
              <Form.Control
                type="file"
                name="img"
              
                onChange={handleImageFire}
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={uploading}>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditCategory}>
            <Form.Group controlId="formEditId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={editCategory._id}
                onChange={handleEditInputChange}
                readOnly
                required
              />
            </Form.Group>
            <Form.Group controlId="formEditName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editCategory.name}
                onChange={handleEditInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEditDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={editCategory.description}
                onChange={handleEditInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEditImg">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                value={editCategory.img}
                onChange={handleEditInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Pagination>
        {Array.from({ length: Math.ceil(categories.length / categoriesPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default CategoryTable;


