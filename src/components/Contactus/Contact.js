import React from 'react'

const Contact = () => {
  return (
    <div class="container-lg  h-auto w-auto bg-light rounded p-3 ">
      
    <div class="row">
      <div className='col-md-6 bg-success'>
      <img src="./contact.jpeg" alt="image" className=' img-fluid h-100% w-100%'/>
      </div>
      <div class=" col-md-3 bg-success p-3 text-white">
        <div class=" row mt-5 ">
          {/* <img src="./contact.jpeg" alt="image"/> */}
          <div className='col'><h4>We love your feedback</h4></div>
          {/* <span className='text-center'><strong>We would love to hear from you !</strong></span> */}
        </div>
        <div className='col'>
          <p class="text-md-center  mx-auto mt-4 mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
           a matter of hours to help you.</p>
          </div>
          <div className='col'>
          <ul class="list-unstyled mb-0 mt-4 ms-4 me-4 text-center">
                <li><i class="bi bi-geo-alt bi-2x"></i>
                    <p>Askari Tower, Lahore, Pakistan</p>
                </li>

                <li>
                <i class="bi bi-telephone-inbound-fill mt-4 bi-2x"></i>
                    <p>+ 01 234 567 89</p>
                </li>

                <li>
                <i class="bi bi-envelope-at-fill mt-4 ba-2x"></i>
                    <p>SLEWBITES1234@GMAIL.COM</p>
                </li>
            </ul>
          </div>
         
      </div>
      <div class="col-md-3  align-items-center">
        <div class="">
          <div class="form-group">
            <h1>contact us</h1>
            <label class="control-label mt-4 " for="fname">First Name:</label>
            <div class="col-sm-10">          
            <input type="text" class="form-control" id="fname" placeholder="Enter First Name" name="fname"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label " for="lname">Last Name:</label>
            <div class="col-sm-10">          
            <input type="text" class="form-control" id="lname" placeholder="Enter Last Name" name="lname"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label" for="email">Email:</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"/>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label " for="comment">Comment:</label>
            <div class="col-sm-10">
            <textarea class="form-control" rows="5" id="comment"></textarea>
            </div>
          </div>
          <div class="form-group">        
            <div class="col-sm-offset-2 mt-3  ms-4">
            <button type="submit" class="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
