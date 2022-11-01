
import React from "react"
import Signup from "./components/pages/Signup"
import Home from "./components/pages/Home"
import Navbar from "./components/navbar/navbar"
import Product from "./components/pages/Product"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './App.css';
import Service from "./components/pages/Service"

import AllRoutes from "./AllRoutes";
function App() {
  return (
    <div className="App">
   <Router>
   <Navbar />
  <Routes>
    <Route path="/" element={<AllRoutes/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/products" element={<Product/>} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
