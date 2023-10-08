import React from "react";
import Card from "react-bootstrap/Card";
import product from "../data/dataicon";
import { Col, Row } from "react-bootstrap";

function BasicExample() {
  return (
    <Row>
    
          {product.map((item) => (
              <Col sm={12} md={2} lg={2}>
              <div className=" ">
            <Card className="iconcard d-flex align-items-center justify-content-between mx-5 my-5">
              <Card.Img
                variant="top"
                className="cardiconimg mt-3"
                src={item.img}
              />
              <Card.Body>
                <Card.Title className="cardtext">{item.title}</Card.Title>
              </Card.Body>
            </Card>
            </div>
      </Col>
          ))}
      
    </Row>
  );
}

export default BasicExample;
