import "./App.css";
import Header from "./Layout/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
const navigate = useNavigate();
  useEffect(()=>{
    navigate('/shop')
  },[])
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
