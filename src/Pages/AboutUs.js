
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


function AboutUs() {
  return (
    <div className="container mt-5">
     {/* <Row>
     <Col md={8}> */}
            <Card id ="card">
                <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                    Welcome to SLEWBites, your ultimate destination for delicious and
                    quality food items. We are passionate about providing the best
                    culinary experience to our customers.
                </Card.Text>
                <Card.Text>
                    At SLEWBites, we carefully source fresh and high-quality ingredients
                    to create mouth-watering dishes. Our team of talented chefs brings
                    together flavors from around the world to delight your taste buds.
                </Card.Text>
                <Card.Text>
                    Whether you're craving a hearty meal, a light snack, or a decadent
                    dessert, we have a wide range of options to satisfy your cravings.
                    Explore our menu and discover your new favorite dish.
                </Card.Text>
                <Card.Text>
                    We value your satisfaction and strive to provide exceptional
                    customer service. Your feedback is important to us, and we are
                    continuously working to improve and exceed your expectations.
                </Card.Text>
                <Card.Text>
                    Thank you for choosing SLEWBites. We look forward to serving you
                    and creating memorable dining experiences.
                </Card.Text>
                </Card.Body>
            </Card>
       {/* </Col> */}
      {/* <Col md={4}>
          <img src={bgImage} alt="About Us" className="img-fluid" />
     </Col> */}
     {/* </Row>  */}
    </div>
  );
}

export default AboutUs;
