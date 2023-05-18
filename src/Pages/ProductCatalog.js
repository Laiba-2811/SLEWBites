import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import item1 from '../PicResources/item1.jpg';
import item2 from '../PicResources/item2.jpg';
import item3 from '../PicResources/item3.jpg';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  return (
    <Container>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item1} />
            <Card.Body>
              <Card.Title>Fresh Items</Card.Title>
              <Card.Text>Price: $10</Card.Text>
              <Button variant="success" onClick={() => addToCart({ id: 1, name: 'Item 1', price: 10 })}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item2} />
            <Card.Body>
              <Card.Title>Baked Items</Card.Title>
              <Card.Text>Price: $15</Card.Text>
              <Button variant="success" onClick={() => addToCart({ id: 2, name: 'Item 2', price: 15 })}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={item3} />
            <Card.Body>
              <Card.Title>Pantry Staples</Card.Title>
              <Card.Text>Price: $20</Card.Text>
              <Button variant="success" onClick={() => addToCart({ id: 3, name: 'Item 3', price: 20 })}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <p>Total Price: ${totalPrice}</p>
          <Button variant="primary">Proceed to Checkout</Button>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </Container>
  );
};

export default ShoppingCart;
