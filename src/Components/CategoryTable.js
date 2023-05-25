import React, { useState , useEffect } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const url = 'http://localhost:3000/api/categories';
  const fetchApiData= async (url)=>{
    try{
      const res= await fetch(url);
      const data = await res.json();
     //  console.log(baseurl, "base");
     setCategories(data)
    } catch(error){
      console.log(error);
    }
     }
    
      useEffect(() => {
       fetchApiData(url);
      
        
      }, [])

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newCategory, setNewCategory] = useState({ id: '', name: '' });
  const [editCategory, setEditCategory] = useState({ id: '', name: '' });

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleEditModal = (category) => {
    setEditCategory(category);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
   
    const url = `http://localhost:3000/api/categories/${id}`;
    const fetchApiData= async (url)=>{
      try{
        const res= await fetch(url, {method: 'DELETE'});
        // const data = await res.json();
       //  console.log(baseurl, "base");
       const updatedCategories = categories.filter((category) => category._id !== id);
       setCategories(updatedCategories);
      } catch(error){
        console.log(error);
      }
       }
       fetchApiData(url);
        
          
    


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
    setCategories([...categories, newCategory]);
    setNewCategory({ id: '', name: '' });
    setShowAddModal(false);

    
  };

  const handleEditCategory = (e) => {
    e.preventDefault();
    const updatedCategories = categories.map((category) => {
      if (category.id === editCategory.id) {
        return editCategory;
      }
      return category;
    });
    setCategories(updatedCategories);
    setEditCategory({ id: '', name: '' });
    setShowEditModal(false);
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category._id}</td>
              <td>{category.name}</td>
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
            <Form.Group controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={newCategory.id}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
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
            <Button variant="primary" type="submit">
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
                value={editCategory.id}
                onChange={handleEditInputChange}
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
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CategoryTable;
