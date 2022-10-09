import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CartItem } from "../components/CartItem";

const Checkout = () => {
  const cart = useSelector((state) => state.cartReducer);

  return (
    <div>
      <h2>Cart Items</h2>
      {
        <Container fluid>
          <Row>
            {cart.cartProducts.length > 0
              ? cart.cartProducts.map((product) => (
                  <Col span={4}>
                    <CartItem
                      name={product.name}
                      price={product.price}
                      productImg={product.productImg}
                      id={product.id}
                    />
                  </Col>
                ))
              : "No Items in the cart"}
          </Row>
        </Container>
      }
      <h1>
        Total:{" "}
        {cart.cartProducts.reduce((sum, next) => sum + parseInt(next.price), 0)}
      </h1>
    </div>
  );
};
export default Checkout;
