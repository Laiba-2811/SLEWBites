import React, { useState, useEffect } from 'react';
import { Table , Pagination } from 'react-bootstrap';

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  // Calculate pagination indexes
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

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
   
  

  // Change page

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Date</th>
            <th>Product Name</th>
            <th> Quantity</th>
            <th>Price</th>
            <th>Total Amount</th>
            <th>Status</th>
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
              <td>{order.Product.name}</td>
              <td>{order.quantity}</td>
              <td>${order.Product.price}</td>
              <td>${order.totalAmount}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }).map((_, index) => (
          <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default OrderTable;
