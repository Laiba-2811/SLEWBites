import React, { useState } from 'react';
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

    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (values) => {
        try {
            // Handle form submission here (e.g., send the form data to your server)
            console.log(values); // You can access the form data here

            // Simulating an asynchronous request
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Assuming the request is successful
                    const successResponse = {
                        status: 'success',
                        message: 'Query submitted successfully!',
                    };
                    resolve(successResponse);

                    // Rejecting the request
                    reject('Error: Failed to submit the query');
                }, 2000); // Simulating a delay of 2 seconds
            });

            console.log(response); // Handle the response as per your requirement
            setSuccessMessage(response.message); // Set the success message
            // alert("form data submitted to backend successfully")
            // Clear the form values after successful submission
            // You can remove this if you want to keep the values in the form
            values.name = '';
            values.email = '';
            values.message = '';
        } catch (error) {
            console.error(error); // Handle the error case
            alert('Error: Failed to submit the query'); // Display error message (you can modify this as needed)
        }
    };

    return (
        <div className="contact-us-container">
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Row className="align-items-center bg-light">
                            <Col md={2}>
                                <img src='./contact.jpeg' alt="SLEWBITES Logo" className="img-fluid" style={{ maxWidth: '100%' }} />
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
                                            className="form-control"
                                        />
                                        <ErrorMessage
                                            name="message"
                                            component="div"
                                            className="text-danger"
                                        />
                                    </Form.Group>

                                    <Button variant="success" type="submit" className='mt-3 rounded p-2'>
                                        Please Submit your Query
                                    </Button>

                                    {successMessage && (
                                        <div className="alert alert-success mt-3" role="alert">
                                            {successMessage}
                                        </div>
                                    )}

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
