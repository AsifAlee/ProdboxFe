import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const initialItemValues = {
  name: "",
  price: "",
  imageUrl: "",
};

function AddItem() {
  const [product, setProdcut] = useState(initialItemValues);
  const navigate = useNavigate();
  const handlChange = (event) => {
    setProdcut({ ...product, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/items", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          navigate("/shop");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4">
          <form id="loginform" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter Product Name"
                onChange={handlChange}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                name="price"
                placeholder="Price"
                onChange={handlChange}
              />
            </div>

            <div className="form-group">
              <label>Image Url</label>
              <input
                type="text"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                placeholder="Image URL"
                onChange={handlChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
