import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const CartPage = () => {
  const { items , updateItemQuantity ,removeItem , isEmpty , cartTotal , emptyCart } = useCart();
  return (
      <>
      <h1 className="text-center text-primary mt-5">Selected products</h1>
      <hr />
            {isEmpty ? <h3 className="text-center text-danger">No Product</h3> :   <Container>
      <Row>
        <Col md={9} sm={12}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Photo</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, count) => (
                <tr>
                  <th scope="row">{count + 1}</th>
                  <td>
                    <img src={item.images[0]} width={100} alt="" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price * item.quantity}$</td>
                  <td>
                        <Button onClick={()=> updateItemQuantity (item.id , item.quantity - 1)}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button  onClick={()=> updateItemQuantity (item.id , item.quantity + 1)}>+</Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={()=>removeItem(item.id)}>X</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Col>
        <Col sm={12} md={3}>
                    <ul className="list-group">
                        <li className="list-group-item active" aria-current="true"><h1>Total Price</h1></li>
                        <li className="list-group-item"><h3>{cartTotal}$</h3></li>
                        <li className="list-group-item"><Button variant="danger" onClick={()=>{emptyCart()}}>Clear</Button><Button className="mx-2"variant="success">Cheackout</Button></li>
             
                </ul>

        </Col>
      </Row>
      <Link className="btn btn-primary my-4" to="/shop"> Back to shop </Link>
    </Container> }
        </>
  );
};

export default CartPage;
