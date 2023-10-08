import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import Singlecard from "../components/SingleCard";
import { ProductContext } from "../context/ProductProvider";

const SliceCard = () => {
  const [product] = useContext(ProductContext);

  return (
    <Row >
      {product.slice(5, 14).map((item) => (
        <Singlecard
          key={item.id}
          photo={item.images[0]}
          title={item.title}
          price={item.price}
          id={item.id}
          alldata={item}
        />
      ))}
    </Row>
  );
};

export default SliceCard;
