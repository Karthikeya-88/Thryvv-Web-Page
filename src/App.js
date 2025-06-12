import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Home from "./componensts/Home.js";
import ContactUs from "./componensts/ContactUs.js";
import Contact from "./componensts/Contact.js";
import Navbar from "./componensts/Navbar.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/more" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
