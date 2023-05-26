import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TeamMember = ({ name, role }) => {
  return (
    <Col md={4} className="mb-4">
      <h4>{name}</h4>
      <p>{role}</p>
    </Col>
  );
};

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>About SLEWBITES</h1>
          <p>Welcome to SLEWBITES, your one-stop destination for delicious and mouthwatering food!</p>
          <p>At SLEWBITES, we believe in serving high-quality and freshly prepared meals to our customers. Our dedicated team of chefs and food enthusiasts work tirelessly to bring you a delightful culinary experience.</p>
          <p>Whether you're craving for comforting classics or looking to explore new flavors, we have a wide range of options to satisfy your taste buds. From appetizers to main courses, desserts, and more, we have something for everyone.</p>
          <p>Our mission is to make your online food ordering experience seamless and enjoyable. We strive to provide excellent customer service and ensure that your orders are delivered on time, every time.</p>
          <p>Thank you for choosing SLEWBITES for your culinary needs. We value your trust and look forward to serving you with delicious meals!</p>
        </Col>
      </Row>
      <Row>
        <TeamMember name="Samra" role="Chef" />
        <TeamMember name="Esha" role="Baker" />
        <TeamMember name="Laiba" role="Food Stylist" />
        <TeamMember name="Waseem" role="Delivery Expert" />
      </Row>
    </Container>
  );
};

export default AboutUs;
