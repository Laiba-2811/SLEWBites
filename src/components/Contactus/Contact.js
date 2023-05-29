import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactUs = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = async (values) => {
        try {
            // Send the form data to the backend server
            const response = await fetch('http://localhost:3000/api/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                console.log('Form data sent successfully');
                // Do something after successful form submission
            } else {
                console.log('Failed to send form data');
                // Handle the error case
            }
        } catch (error) {
            console.log('Error occurred while sending form data', error);
            // Handle the error case
        }
    };

    return (
        <div className="contact-us-container">
            <Container>
                <Row className="justify-content-center  mt-5">
                    <Col md={8} className='shadow'>
                        <Row className="align-items-center bg-light p-3">
                            <Col md={2}>
                                <img src='./contact.jpeg' alt="SLEWBITES Logo" className="img-fluid"

                                    style={{ maxWidth: '100%' }} />
                            </Col>
                            <Col md={10}>
                                <h3>SlewBites</h3>
                                <h6 className='m-0'>Reach out to us from our contact form and we will get back to you shortly.</h6>
                            </Col>
                        </Row>
                        <h2 className="mt-3">Contact Us</h2>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows={4}
                                            className="form-control "
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="text-danger "
                                        />
                                    </Form.Group>

                                    <Button variant="success" type="submit" className='mt-3 rounded p-2'>
                                        Please Submit your Query
                                    </Button>

                                    <div className="mt-3 d-flex justify-content-center bg-light p-4">
                                        <a href="https://www.facebook.com">
                                            <FontAwesomeIcon icon={faFacebook} size="lg" className="text-primary" />
                                        </a>
                                        <span className="mx-3"></span> {/* Add white space using margin */}
                                        <a href="https://www.twitter.com">
                                            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-info" />
                                        </a>
                                        <span className="mx-3"></span>
                                        <a href="https://www.instagram.com">
                                            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-danger" />
                                        </a>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;
