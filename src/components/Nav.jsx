import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "./Modal";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function NavScrollExample() {
  const {totalItems} = useCart();
  return (
    <div className="navcenter">
        <Navbar expand="lg" className="bg-light  navbar-light container nav">
      <Container>
        <Navbar.Brand href="#" className="start">
          <img
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 middle"
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shop">
              <Nav.Link>Shop</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link>Blog</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
           
          </Nav>


      <div className=" d-flex me-2">
            <Link to="/cart" type="button" className="btn btn-primary position-relative me-3" >
            <i class="fa-solid fa-cart-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            </Link>

      <Modal/>
        <div className="ms-3 ">
        {localStorage.getItem('active')=== 'true'?"adil@gmail.com": <LinkContainer to="/login"><Button variant='success' className="mx-2">Login</Button></LinkContainer>}
        </div>
      </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;
