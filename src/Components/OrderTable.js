import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  const [orders, setOrders] = useState([]);
  const url = 'http://localhost:3000/api/orders';
  const fetchApiData= async (url)=>{
    try{
      const res= await fetch(url);
      const data = await res.json();
     //  console.log(baseurl, "base");
     setOrders(data)
    } catch(error){
      console.log(error);
    }
     }
    
      useEffect(() => {
       fetchApiData(url);
      
        
      }, [])
   
  // Calculate pagination indexes
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
      
            <th>Email</th>
            {/* <th>Password</th> */}
            <th>Number</th>
            <th>Address</th>
            <th>Date</th>
            <th>Total Amount</th>
            <th>Quantity</th>
      
            <th>Product Name</th>
            <th>Price</th>
            <th>Product Quantity</th>
            <th>In Stock</th>

            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
               <td>{order._id}</td>
            
              <td>{order.User.email}</td>

              <td>{order.User.number}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.totalAmount}</td>
              <td>{order.quantity}</td>

              <td>{order.Product.name}</td>
              <td>{order.Product.price}</td>
              <td>{order.Product.quantity}</td>
              <td>{order.Product.inStock.toString()}</td>
          
               <td>{order.Product.Category.name}</td> 
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <nav>
        <ul className="pagination">
          {orders.map((order, index) => (
            <li key={index} className="page-item">
              <button className="page-link" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default OrderTable;
