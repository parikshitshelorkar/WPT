import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './register';
import Product from './Product';
import List from './list';

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Transflower store</h1>

        {/* Navigation */}
        <Link to="/">Home</Link> |{" "}
        <Link to="/hello">Hello</Link> |{" "}
        <Link to="/product">Product</Link> |{" "}
        <Link to="/aboutus">About Us</Link> |{" "}
        <Link to ="Flowers">Flowers</Link>|{" "}
        <Link to="/contact">Contact</Link>

        <hr />

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/product" element={<Product />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path = "/Flowers" element={<List/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

function Hello() {
  return (
    <div>
      <h2>Hello Component</h2>
      <h3>Welcome to child component</h3>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Transflower Learning Pvt Ltd</h1>
        <p>We are here to provide you the best learning experience</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Flowers</p>
            <p>Celebrate every moment using flowers</p>
          </div>

          <div className="col-md-4">
            <Register />
          </div>

          <div className="col-md-4">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h2>About us</h2>
      <h3>Transflower Agro services</h3>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <h3>Transflower Farms</h3>
      <p>Tambademala</p>
      <p>Manchar Tal. Ambegaon</p>
    </div>
  );
}

export default App;