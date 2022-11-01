
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
    <Route path="/travel-webpage" element={<AllRoutes/>} />
    <Route path="/travel-webpage/service" element={<Service/>} />
    <Route path="/travel-webpage/products" element={<Product/>} />
    <Route path="/travel-webpage/signup" element={<Signup />} />
    <Route path="/travel-webpage/home" element={<Home />} />
  </Routes>
</Router>
    </div>
  );
}

export default App;
