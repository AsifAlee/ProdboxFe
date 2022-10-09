import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
export const CartItem = (props) => {
  const { productImg, price, name, id } = props;
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require("../assets" + productImg)} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: id });
          }}
        >
          Remove Item
        </Button>
      </Card.Body>
    </Card>
  );
};
