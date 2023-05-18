
import React, { useState } from "react"
import { Container, Form, FormGroup, InputGroup, Col } from "react-bootstrap"
import './Signup.css'
export default function (props) {
    let [authMode, setAuthMode] = useState("signin")
    let [Textposition, setTextposition] = useState()
    

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            // <Container  fluid="xl" className="Auth-form-container" style={{backgroundColor:"lightgray", textAlign:"center"}}>
            //     <form className="Auth-form" style={{ textAlign: "center" }} row>

            //        <div className="Auth-form-content form-outline mb-4">
            //             <h3 className="Auth-form-title">Sign In</h3>
            //             <div className="text-center form-outline mb-4">
            // Not registered yet?{" "}
            // <span className="link-primary" onClick={changeAuthMode}>
            //     Sign Up
            // </span>
            //             </div>
            //             <div className="form-group mt-3">
            //                 <label>Email address</label>
            //                 <input
            //                     type="email"
            //                     className="form-control mt-1"
            //                     placeholder="Enter email"
            //                 />
            //             </div>
            //             <div className="form-group mt-3">
            // <label>Password</label>
            // <input
            //     type="password"
            //     className="form-control mt-1"
            //     placeholder="Enter password"
            // />
            //             </div>
            //             <div className="d-grid gap-2 mt-3">
            // <button type="submit" className="btn btn-primary">
            //     Submit
            // </button>
            //             </div>
            //             <p className="text-center mt-2">
            //                 Forgot <a href="#">password?</a>
            //             </p>
            //         </div>

            //     </form>
            // </Container>
            <Container className="bg-grey border Auth-form-container  " fluid="md">
                <Form className="Auth-form" >
                    <FormGroup>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ textAlign: "center" }}>
                    <h4 style={{color:"green"}} >Sign In</h4>
                    <Col style={{ textAlign: "center", marginTop: "13px" }}>
                        Not registered yet?{" "}
                        <span className="link-primary" style={{color:"green"}} onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </Col>

                </Col>
                    </FormGroup>
                    <FormGroup className="Auth-form-title">
                        <Col md={{ offset: 3, size: 4 }} sm="10" style={{ textAlign: "center", marginTop: "13px" }}>
                            <InputGroup className="Auth-form-title">
                                {/* <label className="label">Email address</label> */}
                                <input style={{ padding: "5px" }}
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                            </InputGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col style={{ textAlign: "center", marginTop: "13px" }} md={{ offset: 3, size: 4 }} sm="10" >
                            <InputGroup>
                                {/* <label>Password</label> */}
                                <input style={{ marginleft: "15px", padding: "5px" }}
                                    type="password"
                                    className="form-control mt-1"
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
                    <Col><h3 className="Auth-form-title">Sign in</h3></Col>
    
                </FormGroup> 
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input style={{padding:"1px"}}
                            type="Full Name"
                            className="form-control mt-1 inputs"
                            placeholder="e.g Jane Doe"
                        />


                    </Col>
                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input style={{padding:"2px"}}
                            type="email"
                            className="form-control mt-1 inputs"
                            placeholder="Email Address"
                        />


                    </Col>

                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input className="inputs" style={{padding:"2px"}}
                            id="exampleNumber"
                            name="number"
                            placeholder="number placeholder"
                            type="number"
                        />

                    </Col>




                </FormGroup>
                <FormGroup className="form-group mt-3" row>
                    <Col md={{ offset: 3, size: 4 }} sm="10" style={{ alignItems: "center" }}>

                        <input style={{padding:"2px"}}
                            type="password"
                            className="form-control mt-1 inputs"
                            placeholder="Password"
                        />

                    </Col>

                </FormGroup>
                <FormGroup className="d-grid gap-2 mt-3" row>
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
                        <span  style={{color:"green"}} className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </Col>

                </FormGroup>
            </Form>
        </Container>
    )
}