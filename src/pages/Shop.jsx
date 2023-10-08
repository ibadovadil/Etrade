import React, { useContext, useState, useEffect } from "react";
import SingleCard from '../components/SingleCard';
import { ProductContext } from '../context/ProductProvider';
import { Accordion, Col, ListGroup, Row } from "react-bootstrap";

const Preloader = () => (
  <div className="preloader">
    <img src="https://media2.giphy.com/media/PUYgk3wpNk0WA/giphy.gif?cid=ecf05e47k7t6yhdxlkd27og3242o598vsyu19nwq7idva1bq&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="Preloader" className="preloader" />
  </div>
);

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product] = useContext(ProductContext);
  const [catProduct, setCatProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  const handleClick = (cat) => {
    const catData = product.filter((parameter) => parameter.category === cat);
    setCatProduct(catData);
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className="container">
          <h1 className='text-center my-5 '>Product List</h1>
          <hr />
          <Row className="mt-5">
            <Col sm={12} md={3} className="mt-4" >
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                    <ListGroup>
                      <ListGroup.Item onClick={() => { handleClick("smartphones") }}>Smartphones</ListGroup.Item>
                      <ListGroup.Item onClick={() => { handleClick("laptops") }}>Laptops</ListGroup.Item>
                      <ListGroup.Item onClick={() => { handleClick("fragrances") }}>Fragrances</ListGroup.Item>
                      <ListGroup.Item onClick={() => { handleClick("skincare") }}>Skincare</ListGroup.Item>
                      <ListGroup.Item onClick={() => { handleClick("groceries") }}>Groceries</ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col sm={12} md={9}>
              <Row className='g-5 '>
                <Col>
                  <Row className='g-5'>
                    {catProduct.length === 0 ? product.map(item => (
                      <SingleCard
                        key={item.id}
                        photo={item.images[0]}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        alldata={item}
                      />
                    )) : catProduct.map(item => (
                      <SingleCard
                        key={item.id}
                        photo={item.images[0]}
                        title={item.title}
                        price={item.price}
                        id={item.id}
                        alldata={item}
                      />
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Shop;
