import React from "react";
import { Button, Card, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Singlecard = ({ photo, title, price, id , alldata}) => {
    const{addItem} = useCart();
    const notify = () => toast.success('Product Added !', {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  return (
    <Col sm={12} md={4}>
       <Container className="mx-2 my-4">
       <Card >
          <Card.Img height={300} width={500}  variant="top" src={photo} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price} $</Card.Text>
                <Button  variant="dark border-light" className="mx-2" onClick={()=> { notify(addItem(alldata)) }}>Add to card</Button>
            <LinkContainer to={`/shop/${id}`}>
              <Button variant="light border-dark">Read more</Button>
            </LinkContainer>
          </Card.Body>
          <ToastContainer
            position="bottom-right"
            autoClose={1000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </Card>
       </Container>
       
    </Col>
  );
};

export default Singlecard;
