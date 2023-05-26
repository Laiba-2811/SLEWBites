// import React from 'react'

// function Login() {
//     return (
//         <section className='items-align-center justify-content-center'>
//         <div class="row g-3 align-items-center">
//             <div class="col-auto">
//                 <label for="inputPassword6" class="col-form-label">Password</label>
//             </div>
//             <div class="col-auto">
//                 <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//             </div>
//             <div class="col-auto">
//                 <span id="passwordHelpInline" class="form-text">
//                     Must be 8-20 characters long.
//                 </span>
//             </div>
//         </div>
//         <div class="row g-3 align-items-center">
//             <div class="col-auto">
//                 <label for="inputPassword6" class="col-form-label">Password</label>
//             </div>
//             <div class="col-auto">
//                 <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//             </div>
//             <div class="col-auto">
//                 <span id="passwordHelpInline" class="form-text">
//                     Must be 8-20 characters long.
//                 </span>
//             </div>
//         </div>
//         <div class="row g-3 align-items-center">
//             <div class="col-auto">
//                 <label for="inputPassword6" class="col-form-label">Password</label>
//             </div>
//             <div class="col-auto">
//                 <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//             </div>
//             <div class="col-auto">
//                 <span id="passwordHelpInline" class="form-text">
//                     Must be 8-20 characters long.
//                 </span>
//             </div>
//         </div>
//         <div class="row g-3 align-items-center">
//             <div class="col-auto">
//                 <label for="inputPassword6" class="col-form-label">Password</label>
//             </div>
//             <div class="col-auto">
//                 <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//             </div>
//             <div class="col-auto">
//                 <span id="passwordHelpInline" class="form-text">
//                     Must be 8-20 characters long.
//                 </span>
//             </div>
//         </div>
//         <div class="row g-3 align-items-center">
//             <div class="col-auto">
//                 <label for="inputPassword6" class="col-form-label">Password</label>
//             </div>
//             <div class="col-auto">
//                 <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
//             </div>
//             <div class="col-auto">
//                 <span id="passwordHelpInline" class="form-text">
//                     Must be 8-20 characters long.
//                 </span>
//             </div>
//             <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
//             <div className='row'>


//             </div>

//         </div>
//         </section>

//     )
// }

// export default Login
// import React from "react";
// // import {changeAuthMode} from "./Contactus/Signup";
// import { Formik, Form, useField, ErrorMessage } from "formik";
// import { object, string, ref } from "yup";

// const RegisterValidation = object().shape({
//     // name: string().required(" Fullname is Required"),
//     email: string()
//         .required("Valid email required")
//         .email("Valid email required"),
//     // number:string() 
//     //       .required("valid number is required")
//     //       .email("valid number is required"),
//     password: string().min(8, "Required").required("Required"),
//     // confirmPassword: string()
//     //     .required("Please confirm your password")
//     //     .oneOf([ref("password")], "Passwords do not match"),
// });

// const Input = ({ name, label, ...props }) => {
//     const [field, meta] = useField(name);
//     return (
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold" for={field.name}>
//                 {label}
//             </label>
//             <input
//                 className={`${meta.error && meta.touched ? "border-red-500" : ""
//                     } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//                 {...field}
//                 {...props}
//             />
//             <ErrorMessage
//                 name={field.name}
//                 component="div"
//                 className="text-red-500 text-xs"
//             />
//         </div>
//     );
// };

// function App() {
//     const handleSubmit = (values) => {
//         console.log(values);
//     };

//     return (
     
//         <div className="h-screen offset-md-6 w-25 ">
//             {/* <Formik
//                 initialValues={{
//                     // name: "",
//                     email: "",
//                     // number: "",
//                     password: "",
//                     // confirmPassword: "",

//                 }}
//                 onSubmit={handleSubmit}
//                 validationSchema={RegisterValidation}
//             >
//                 {() => {
//                     return (
                        
//                         // <Form className="  w-6/12 shadow-md rounded  pt-2 " style={{backgroundColor:"#e3dfdf"}}>
//                         //     <Input name="name" label="Name:" />
//                         //     <Input name="email" label="Email:" />
//                         //     <Input name="number" label="Number:" />
//                         //     <Input name="password" label="Password:" type="password" />
//                         //     <Input
//                         //         name="confirmPassword"
//                         //         label="Confirm Password:"
//                         //         type="password"
//                         //     />
//                         //     <div className="">
//                         //         <button
//                         //             className=" btn btn-success bg-blue-500 hover:bg-success text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         //             type="submit"
//                         //         >
//                         //             Register
//                         //         </button>
//                         //     </div>
//                         // </Form>
//                         <Form className="align-items-start   shadow-lg  mb-5 bg-light rounded">
//                         <nav class="navbar text-white  bg-success w-auto">
            
//                           <h1 class="navbar-brand mb-0 mx-2 text-center">Sign In</h1>
            
//                         </nav>
//                         <div className="">
            
//                           <div className="text-center mt-4">
//                             Not registered yet?{" "}
//                             <span className="link-primary" onClick={changeAuthMode}>
//                               Sign Up Here
//                             </span>
//                           </div>
//                           <div className="form-group mt-2 px-3 p-3">
//                             <label className="align-items-start">Email address:</label>
//                             <Input
//                               type="email"
//                               className="form-control"
//                               placeholder="Enter email"
//                             />
//                           </div>
//                           <div className="form-group mt-2 px-3 p-3">
//                             <label className="align-items-start">Password:</label>
//                             <Input
//                               type="password"
//                               className="form-control"
//                               placeholder="Enter password"
//                             />
//                           </div>
//                           <div className="d-grid gap-2 mt-3 px-3 ms-5 me-5">
//                             <button type="submit" className="btn btn-success ms-5 me-5 rounded-pill">
//                               Login
//                             </button>
//                           </div>
//                           <p className="text-center mt-2">
//                             Forgot <a href="#">password?</a>
//                           </p>
//                         </div>
//                       </Form>
//                     );
//                 }}
//             </Formik> */}
//         </div>
   
//     );
// }
// export default App;