import {FaUserCircle, FaSearch , FaShoppingCart,FaGoogle, FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
import React from 'react';
export default function Footer(){
    return(
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
    );
}