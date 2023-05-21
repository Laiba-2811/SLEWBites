import React from "react";
import { Card,Button } from "react-bootstrap";
import {Row, Col} from "react-bootstrap"; 
export default function Cards({item}){
    return(
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            <Row>
                <Col >{item.Category}</Col>
                <Col>{item.price}</Col>
            </Row>
            <Row>
                <Col><h6>Quantity</h6>
                <select>
                    {[...Array(10).keys].map((i,v)=>{
                        <option value={i+1}>{i+1}</option>
                    })}
                </select>
                
                </Col>
            </Row>
         
        </Card.Text>
        <Button variant="success">Add to Cart</Button>
      </Card.Body>
    </Card>

    </>

    );



}