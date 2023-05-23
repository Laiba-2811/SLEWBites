import React, { useState } from "react";
import { Card,Button } from "react-bootstrap";
import {Row, Col} from "react-bootstrap"; 
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
export default function Cards({item}){
    const [quantity, setQuantity]=useState(1)
    return(
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
            <Row>
                <Col >{item.Category}</Col>
                <Col >{item.price * quantity}</Col>
            </Row>
            <Row>
                <Col><h6>Quantity</h6>
                <select onChange={e=>setQuantity(e.target.value)}>
                    {[...Array(10).keys].map((i,v)=>{
                        <option value={i+1} >{i+1}</option>
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