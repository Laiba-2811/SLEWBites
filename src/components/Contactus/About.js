import React from 'react'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className='section'>
            {/* <div className='container'>
                <div className='content-section'>
                    <div className='title'>
                        <h2>About Us</h2>
                    </div>
                    <div className='content'>
                        <h3>
                            Welcome to SlewBites - Your Ultimate Online Food Store!
                        </h3>
                        <p>
                            At SlewBites, we are passionate about providing you with the finest quality food products conveniently delivered to your doorstep. With a wide range of offerings, we specialize in three main categories: Fresh Items, Baked Items, and Pantry Staples. Our commitment to excellence and customer satisfaction sets us apart as your go-to destination for all your culinary needs.
                        </p>
                    </div>
                    <div className='social'>
                        <a href=''><i class="bi bi-facebook"></i></a>
                        <a href=''><i class="bi bi-whatsapp"></i></a>
                        <a href=''><i class="bi bi-twitter"></i></a>
                    </div>
                </div>

            </div> */}
            {/* <div className='image-section'>
                <img src='./imgaboutpge.jpg' alt="some new images" />
            </div> */}
            <section className='section'>
                <div class="image">
                    <img src='./about.jpeg' alt="some new images" />
                </div>


                <div class="content">
                    <h2>About Us</h2>
                    <span></span>
                    <h5>Welcome to SlewBites - Your Ultimate Online Food Store!</h5>
                    <p>At SlewBites, we are passionate about providing you with the finest quality food products conveniently delivered to your doorstep. With a wide range of offerings, we specialize in three main categories: Fresh Items, Baked Items, and Pantry Staples. Our commitment to excellence and customer satisfaction sets us apart as your go-to destination for all your culinary needs.</p>
                    <ul class="icons">
                        <li>
                            <i class="bi bi-twitter"></i>
                        </li>
                        <li>
                            <i class="bi bi-facebook"></i>
                        </li>
                        <li>
                            <i class="bi bi-github"></i>
                        </li>
                        <li>
                            <i classname="bi bi-whatsapp"></i>
                        </li>
                        <li>
                            <i className='bi bi-instagram'></i>
                        </li>
                    </ul>
                </div><br></br>

            </section>



        </div>



    )
}

export default About
