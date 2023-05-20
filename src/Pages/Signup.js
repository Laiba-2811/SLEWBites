
import React, { useState } from "react"
import { Container, Form, FormGroup, InputGroup, Col, Label } from "react-bootstrap"
import './Signup.css'
import {FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
// Form validation fumctions
export const emailValidator = email => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return "";
  };
  export const fullname= fullname=>{
    if(!fullname){
        return "Please enter your first name"
    }else if (!new RegExp(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        alert('Valid fullname given.');
        return "valide fullname type here";
    }
}
  export const passwordValidator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return "";
  };
  
export default function SignUp (props) {
    let [authMode, setAuthMode] = useState("signin")
    let [Textposition, setTextposition] = useState()


    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin" || Textposition === "") {
        return (
            <Container className="bg-grey border Auth-form-container  " fluid="md">
                <Form className="Auth-form" >
                    <FormGroup row>

                        <Col md={{ offset: 6, size: 8 }} sm="10" className="">
                            <h4 className="signin-he Auth-form-title"  >Sign In</h4>
                        </Col>
                        <Col style={{ textAlign: "center", marginTop: "13px" }}>
                            Not registered yet?{" "}
                            <span className="link-primary" style={{ color: "green" }} onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </Col>


                    </FormGroup>
                    <FormGroup className="Auth-form-title">
                        <Col md={{ offset: 3, size: 4 }} sm="10" style={{ textAlign: "center", marginTop: "13px" }}>
                            <InputGroup className="Auth-form-title">
                                {/* <label className="label">Email address</label> */}
                                <input 
                                    type="email"
                                    className="form-control mt-1 inputs"
                                    placeholder="Enter email"
                                />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col style={{ textAlign: "center", marginTop: "13px" }} md={{ offset: 3, size: 4 }} sm="10" >
                            <InputGroup>
                                {/* <label>Password</label> */}
                                <input 
                                    type="password"
                                    className="form-control mt-1 inputs"
                                    placeholder="Enter password"
                                />
                            </InputGroup>

                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col style={{ textAlign: "center", marginTop: "13px" }} md={{ offset: 3, size: 4 }} sm="10">
                            <button type="submit" className="submitbtn" style={{ marginleft: "11px", color: "white" }}>
                                Submit
                            </button>

                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col style={{ textAlign: "center", marginTop: "13px" }} md={{ offset: 3, size: 4 }} sm="10">
                            <p className="text-center mt-2">
                                Forgot <a href="#">password?</a>
                            </p>

                        </Col>
                    </FormGroup>

                </Form>
            </Container>
        )
    }

    return (
        <Container className="Auth-form-container" fluid="md">
            <Form className="Auth-form" row>
                <FormGroup className="Auth-form-content" row style={{ marginBottom: "15px" }}>
                    <Col md={{ offset: 6, size: 8 }} sm="10"><h4 className="Auth-form-title signup-he">Sign in</h4></Col>

                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>
                   <InputGroup> <i class="bi bi-person-rolodex"></i>
                        <input style={{ padding: "1px" }}
                            type="Full Name"
                            className="form-control mt-1 inputs"
                            placeholder="e.g Jane Doe"
                        />
                        </InputGroup>


                    </Col>
                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>
                      <InputGroup>
                     
                      <i class="bi bi-envelope"></i>
                        <input style={{ padding: "2px" }}
                            type="email"
                            className="form-control mt-1 inputs"
                            placeholder="Email Address"
                        />
                      </InputGroup>


                    </Col>

                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input className="inputs" style={{ padding: "2px" }}
                            id="exampleNumber"
                            name="number"
                            placeholder="number placeholder"
                            type="number"
                        />

                    </Col>




                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input style={{ padding: "2px" }}
                            type="password"
                            className="form-control mt-1 inputs"
                            placeholder="Password"
                        />

                    </Col>

                </FormGroup>
              
               
                <FormGroup className="d-grid gap-2 mt-3" row>
                    {/* <Col md={{ offset: 3, size: 4 }} sm="10" >
                        <button type="cancel"  className="submitbtn">
                            cancel
                        </button>
                    </Col> */}
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>
                        <button type="submit" className="submitbtn">
                            Submit
                        </button>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>
                        <p className="text-center mt-2">
                            Forgot <a href="#">password?</a>
                        </p>
                    </Col>
                    <Col className="text-center">
                        Already registered?{" "}
                        <span style={{ color: "green" }} className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </Col>

                </FormGroup>
            </Form>
        </Container>
        
    )
}