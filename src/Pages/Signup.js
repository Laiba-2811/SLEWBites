import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col, Form, FormGroup, Button, Input, InputGroup } from "reactstrap"
// import './Signup.css'
export default function Register(props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="container-lg  d-flex justify-content-center w-auto h-auto align-items-center">
        <form className="w-auto   align-items-start  h-auto shadow-lg  mb-5 bg-light rounded">
          <nav class="navbar  bg-success align-items-center rounded rounded-bottom rounded-top rounded-end rounded-start w-auto">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1 color-white">Sign In</span>
            </div>
          </nav>
          <div className="">

            <div className="text-center mt-4">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up Here
              </span>
            </div>
            <div className="form-group mt-2 px-3 p-3">
              <label className="align-items-start ms-4 ">Email address:</label>
              <input
                type="email"
                className="form-control mt-1 rounded-pill"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-2 px-3 p-3">
              <label className="align-items-start ms-4">Password:</label>
              <input
                type="password"
                className="form-control mt-1 rounded-pill"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3 px-3 ms-5 me-5">
              <button type="submit" className="btn btn-success ms-5 me-5 rounded-pill">
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="container-lg  d-flex justify-content-center w-auto h-auto align-items-center">
      <form className="w-auto   align-items-start  h-auto shadow-lg  mb-5 bg-light rounded">
        <nav class="navbar  bg-success text-center  rounded rounded-start rounded-bottom rounded-top rounded-end w-auto">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 color-white">Sign Up</span>
          </div>
        </nav>
        <div className="">
          <div className="text-center mt-4">

            Already registered?{" "}
            <span className="link-primary text-center" onClick={changeAuthMode}>
              Login Here
            </span>
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start ms-4">Full Name</label>
            <input
              type="Name"
              className="form-control mt-1 rounded-pill"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label for="exampleNumber" className="align-items-start ms-4">
              Number:
            </label>
            <input
             className="form-control mt-1 rounded-pill"
              id="exampleNumber"
              name="number"
              placeholder="number placeholder"
              type="number"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start ms-4">Email address</label>
            <input
              type="email"
              className="form-control mt-1 rounded-pill"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start ms-4">Password</label>
            <input
              type="password"
              className="form-control mt-1 rounded-pill"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3 px-3 ms-5 me-5">
            <button type="submit" className="btn btn-success ms-5 me-5 rounded-pill">
              Sign Up
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}