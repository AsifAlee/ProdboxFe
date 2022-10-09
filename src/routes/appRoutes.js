import React from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Shop from "../pages/Shop";
import AddItem from "../pages/AddItem";
import Checkout from "../pages/Checkout";
import App from "../App";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
