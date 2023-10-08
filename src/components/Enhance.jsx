import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Enhance = () => {
  return (
    <Container className="mx-4">
      <div className="main flex-start container align-items-end">
        <div className="left align-items-start">
          <div className="miss d-flex">
            <i
              className="fa-solid fa-headphones"
              style={{ color: "#ff497c" }}
            />
            <p>Don’t Miss!!</p>
          </div>
          <span>Enhance Your Music Experience</span>
          <div className="circlehour">
            <Row>
              <Col sm={12} className="circle">
                <div>
                  0 <br /> day
                </div>
              </Col>
              <Col sm={12} className="circle">
                <div>
                  10 <br /> Hrs
                </div>
              </Col>
              <Col sm={12} className="circle">
                <div>
                  38 <br /> Min
                </div>
              </Col>
              <Col sm={12} className="circle">
                <div>
                  17 <br /> Sec
                </div>
              </Col>
            </Row>
          </div>
          <Link to="/shop" className="btn btn-primary checkbtn" variant="primary">Check it out!</Link>
        </div>
        <div className="right">
            <img src="
            https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Enhance;
