import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
const Shop = () => {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (searchString) => {
    const filteredProducts = products.filter(
      (prod) => prod.name === searchString
    );
    setProduct(filteredProducts);
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/items",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const addItemToCart = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  return (
    <Container>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: 40,
          marginTop: 20,
        }}
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Search Product"
          onChange={(event) => setSearch(event.target.value)}
          style={{ marginRight: 20 }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => handleSearch(search)}
        >
          Search...
        </button>
      </div>

      <Row>
        {products &&
          products.map((product) => (
            <Col span={8}>
              <Product
                name={product.name}
                price={product.price}
                productImg={product.img || "/images/placeholder.jpg"}
                key={product.id}
                addItemToCart={addItemToCart}
                id={product.id}
              />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Shop;
