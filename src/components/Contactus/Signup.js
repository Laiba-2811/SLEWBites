
import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const handleSubmit = (values) => {
    console.log(values);
  };


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="container-lg  d-flex justify-content-center w-100 h-100 align-items-center">


        <form className="align-items-start   shadow-lg  mb-5 bg-light rounded">
          <nav class="navbar text-white  bg-success w-auto">

            <h1 class="navbar-brand mb-0 mx-2 text-center">Sign In</h1>

          </nav>
          <div className="">

            <div className="text-center mt-4">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up Here
              </span>
            </div>
            <div className="form-group mt-2 px-3 p-3">
              <label className="align-items-start">Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-2 px-3 p-3">
              <label className="align-items-start">Password:</label>
              <input
                type="password"
                className="form-control"
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

        



        



      </div >
    )
  }

  return (
    <div className="container-lg  d-flex justify-content-center w-100 h-100 align-items-center">
      <form className="   align-items-start  shadow-lg  mb-5 bg-grey rounded">
        <nav class="navbar  bg-success text-center  rounded  w-auto">

          <h1 class="navbar-brand mb-0 h1 mx-2 text-white text-center">Sign Up</h1>

        </nav>
        <div className="">
          <div className="text-center mt-4">

            Already registered?{" "}
            <span className="link-primary text-center" onClick={changeAuthMode}>
              Login Here
            </span>
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start">Enter Name</label>
            <input
              type="Name"
              className="form-control "
              placeholder="Please Enter your Name"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label for="exampleNumber" className="align-items-start">
              Enter Number:
            </label>
            <input
              className="form-control"
              id="exampleNumber"
              name="number"
              placeholder="Please Enter your Number"
              type="number"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start">Email address:</label>
            <input
              type="email"
              className="form-control"
              placeholder=" Please Enter Your Email Address"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start">Enter Password:</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password Here"
            />
          </div>
          <div className="form-group mt-2 px-3 p-3">
            <label className="align-items-start">Confirm Password:</label>
            <input
              type="confirmpassword"
              className="form-control"
              placeholder="Please Confirm your password"
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