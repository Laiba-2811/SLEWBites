import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Dashboard = () => {
  const userOrders = [
    { id: 1, status: 'Pending', product: 'Product A' },
    { id: 2, status: 'Completed', product: 'Product B' },
    { id: 3, status: 'Pending', product: 'Product C' },
    // Add more user orders as needed
  ];

  const productCategories = [
    { name: 'Category A', count: 20 },
    { name: 'Category B', count: 15 },
    { name: 'Category C', count: 10 },
    // Add more product categories as needed
  ];

  return (
    <Container>
      <Row>
        <Col>
          <h2>User Orders</h2>
          {userOrders.map((order) => (
            <Card key={order.id} className="order-card">
              <Card.Body>
                <Card.Title>{order.product}</Card.Title>
                <Card.Text>Status: {order.status}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col>
          <h2>Product Categories</h2>
          {productCategories.map((category, index) => (
            <p key={index} className="category">
              {category.name}: {category.count}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
