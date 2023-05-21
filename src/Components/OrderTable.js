import React, { useState } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import '../App.css';

const Order = () => {
  const data = [
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    {
      id: 1,
      orderId: 'ORD001',
      customerName: 'John Doe',
      orderDate: '2023-05-17',
      totalAmount: 50.99,
      quantity: 2,
      status: 'Delivered',
    },
    
  ];

  const itemsPerPage = 5; // Number of items to display per page

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of records and items per page
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the index range of records to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Slice the data based on the current page
  const slicedData = data.slice(startIndex, endIndex);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Total Amount</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((item) => (
            <tr key={item.id}>
              <td>{item.orderId}</td>
              <td>{item.customerName}</td>
              <td>{item.orderDate}</td>
              <td>{item.totalAmount}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {totalPages > 1 && (
        <Pagination>
          {/* Previous Page button */}
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          {/* Next Page button */}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      )}
    </div>
  );
};

export default Order;



