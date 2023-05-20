import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <div className='section'>
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
                            <i className="bi bi-whatsapp"></i>
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
