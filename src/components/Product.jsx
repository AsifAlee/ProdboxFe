import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { name, price, productImg, addItemToCart, id } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require("../assets" + productImg)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button
          variant="primary"
          onClick={() =>
            addItemToCart({
              id: id,
              name: name,
              price: price,
              productImg: productImg,
            })
          }
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
