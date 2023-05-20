import React from 'react'
import {FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
// import './contact.css'
function Contact() {
  return (
    <div class="container">
    <div class="card">
      <div class="left">
        <img src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
      </div>
      <div class="right">
        <h2>Contact Us</h2>
        <div class="contact">
          <div class="form-container">
            <form class="form">
              <div class="username">
                <input type="text" placeholder="Enter your Name"/>
              </div>
              <div class="useremail">
                <input type="email" placeholder="Enter your email" required/>
              </div>
              <div class="usermessage">
                <textarea placeholder="Enter your message" required></textarea>
              </div>
              <div class="usersubmit">
                <input type="submit" value="Contact Us"/>
              </div>
            </form>
          </div>
          <div class="address">
            <div class="email">
              <h4>Contact</h4>
              <p>hi@example.com</p>
            </div>
            <div class="location">
              <h4>Based in</h4>
              <p>AskariTower,<br/>Lahore</p>
            </div>
            {/* <div class="social">
              <span><a href="#"><i class="fab fa-facebook"></i></a></span>
              <span><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></span>
              <span><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    
<div className="container-fluid px-0" id="footerDiv">
      {/* Footer */}
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
          {/* Left */}
          <div>
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="" className="text-white me-4">
              <i><FaFacebook/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaTwitter/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaGoogle/></i>
            </a>
            <a href="" className="text-white me-4">
              <i><FaInstagram/></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-sm-6 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">SlewBites</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">SlewBites</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Fresh Items</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Baked Items</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Pantry Staples</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-sm-6 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p>
                  <a href="#!" className="text-dark">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '100px', backgroundColor: '#7c4dff', height: '2px' }} />
                <p><i className="fas fa-home mr-3"></i> Askari Tower, Gulberg, Lahore</p>
                <p><i className="fas fa-envelope mr-3"></i> SlewBites@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <div class="row">© 2020 SlewBites.com</div>
          
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Contact

