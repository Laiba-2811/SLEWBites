import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form , Pagination } from 'react-bootstrap';
// for firebase
import { storage } from '../firebase/firebase';
import {ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

const ProductTable = () => {

       //show modal 
       const [showAddModal, setShowAddModal] = useState(false);
       const [showEditModal, setShowEditModal] = useState(false);
       const [newProduct, setNewProduct] = useState({
         name: '',
         img: '',
         price: '',
         quantity: '',
         inStock: false,
         Category: {}
       });
       const [editProduct, setEditProduct] = useState({
         _id: '',
         name: '',
         img: '',
         price: '',
         quantity: '',
         inStock: false,
         Category: {}
       });

       const [categories, setCategories] = useState([]);

// for firebase
const [imgUrl, setImgUrl] = useState(null);
const [progresspercent, setProgresspercent] = useState(0);
const [uploading, setUploading] = useState(true)

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  // for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

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
          // setImgUrl(downloadURL)
          setUploading(false)

          if(showEditModal){
            setEditProduct({ ...editProduct, ['img']: downloadURL});
          }
          else {
            setNewProduct({ ...newProduct, ['img']: downloadURL});
          }

          

          //console.log(imgUrl)
        });
      }
    );

}

  //fetching data
  const url = 'http://localhost:3000/api/products';

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(url);
  }, []);

  const urlcat = 'http://localhost:3000/api/categories';

  const catfetchApiData = async (urlcat) => {
    try {
      const res = await fetch(urlcat);
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    catfetchApiData(urlcat);
  }, []);


 

  const handleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleEditModal = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const handleDelete = (id) => {
    const url = `http://localhost:3000/api/products/${id}`;
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = products.filter((product) => product._id !== id);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    console.log("here",name, value)
    console.log('cats',categories)
    if(name=='Category'){
      value=categories.filter((cat)=>cat._id==value)
       value=value[0]
      console.log(value)
    }

    setNewProduct({ ...newProduct, [name]: value });
    console.log('here2', newProduct)
  };

  const handleEditInputChange = (e) => {
    let { name, value } = e.target;
    if(name=='Category'){
      value=categories.filter((cat)=>cat._id==value)
       value=value[0]
      console.log(value)
    }
    setEditProduct({ ...editProduct, [name]: value });
  
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const { name, img, price, quantity, inStock, Category } = newProduct;
    const requestBody = {
      name,
      img,
      price,
      quantity,
      inStock,
      Category
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts([...products, data]);
        setNewProduct({
          name: '',
          img: '',
          price: '',
          quantity: '',
          inStock: false,
          Category: '',
        });
        setShowAddModal(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const { _id, name, img, price, quantity, inStock, Category } = editProduct;
    const requestBody = {
      _id,
      name,
      img,
      price,
      quantity,
      inStock,
      Category,
    };

    fetch(`${url}/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedProducts = products.map((product) => {
          if (product._id === data._id) {
            return data;
          }
          return product;
        });
        setProducts(updatedProducts);
        setEditProduct({
          _id: '',
          name: '',
          img: '',
          price: '',
          quantity: '',
          inStock: false,
          Category: {}
        });
        setShowEditModal(false);
      })
      .catch((error) => {
        console.log(error);
      });


  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>In Stock</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              {/* <td>{product.img}</td> */}
              <td><a href={product.img} target='_blank'><img src={product.img} height={30}/></a></td>
              <td>  ${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.inStock ? 'Yes' : 'No'}</td>
              <td>{product.Category.name}</td>
              <td>
                <Button variant="info" onClick={() => handleEditModal(product)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(product._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="primary" onClick={handleAddModal}>
        Add Product
      </Button>

      <Modal show={showAddModal} onHide={handleAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddProduct}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            {/* <Form.Group controlId="formImage">
              <Form.Label> Upload Image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                value={newProduct.img}
                onChange={handleInputChange}
                
              />
            </Form.Group> */}
             <Form.Group controlId="formImg">
              <Form.Label>Image {uploading && progresspercent>0 && `is uploaded ${progresspercent} %` }</Form.Label>
              <Form.Control
                type="file"
                name="img"
              
                onChange={handleImageFire}
              />
            </Form.Group>

            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={newProduct.quantity}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formInStock">
              <Form.Check
                type="checkbox"
                label="In Stock"
                name="inStock"
                checked={newProduct.inStock}
                onChange={(e) => setNewProduct({ ...newProduct, inStock: e.target.checked })}
              />
            </Form.Group>
            <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="Category"
            // value={newProduct.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a category</option>
      
          {categories.map((category) => {
            return(
              <option value={category._id}>{category.name}</option>
            )
          })}
          </Form.Control>
        </Form.Group>

            <Button variant="primary" type="submit" disabled={uploading}>
              Add
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditProduct}>
            <Form.Group controlId="formEditId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={editProduct._id}
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
                value={editProduct.name}
                onChange={handleEditInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEditImage">
              <Form.Label>Image {uploading && progresspercent>0 && `is uploaded ${progresspercent} %` }</Form.Label>
              <Form.Control
                type="file"
                name="img"
                onChange={handleImageFire}
                
              />
            </Form.Group>
            <Form.Group controlId="formEditPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={editProduct.price}
                onChange={handleEditInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEditQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={editProduct.quantity}
                onChange={handleEditInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEditInStock">
              <Form.Check
                type="checkbox"
                label="In Stock"
                name="inStock"
                checked={editProduct.inStock}
                onChange={(e) => setEditProduct({ ...editProduct, inStock: e.target.checked })}
              />
            </Form.Group>
            <Form.Group controlId="formEditCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
            as="select"
                name="Category"
                 value={editProduct.Category._id}
                onChange={handleEditInputChange}
                required
              >
                {categories.map((category) => {
            return(
              <option value={category._id} >{category.name}</option>
            )
          })}
             </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Pagination>
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default ProductTable;

