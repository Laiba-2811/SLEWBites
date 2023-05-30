import React, { useState, useEffect } from 'react';
import { Table, Dropdown } from 'react-bootstrap';

const DashBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(5);

  const [orders, setOrders] = useState([]);
  const url = 'http://localhost:3000/api/orders';

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(url);
  }, []);

  // Calculate pagination indexes
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleStatusUpdate = (orderId, newStatus) => {
    // Logic to update the status of the order and update the UI
    const updatedOrders = orders.map((order) => {
      if (order._id === orderId) {
        return {
          ...order,
          status: newStatus,
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Order Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Date</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.User.email}</td>
              <td>{order.User.number}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>{order.Product ? order.Product.name : ''}</td> {/* Add a check for Product */}
              <td>{order.quantity}</td>
              <td>{order.Product ? order.Product.price : ''}</td> {/* Add a check for Product */}
              <td>{order.totalAmount}</td>
              <td>{order.status}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Action
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleStatusUpdate(order._id, 'In Process')}
                      disabled={order.status === 'In Process'}
                    >
                      In Process
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleStatusUpdate(order._id, 'Dispatched')}
                      disabled={order.status === 'Dispatched'}
                    >
                      Dispatch
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleStatusUpdate(order._id, 'Delivered')}
                      disabled={order.status === 'Delivered'}
                    >
                      Delivered
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleStatusUpdate(order._id, 'Completed')}
                      disabled={order.status === 'Completed'}
                    >
                      Complete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
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

export default DashBoard;
