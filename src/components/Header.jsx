import React from "react";
import Hero from "./Hero";
import SliceCard from "../components/SliceCard";
import Iconcard from "../components/Iconcard"
import Enhance from "./Enhance";
import Footer from "./Footer";

const Header = () => {
  return (
    <div className="header">
      <div className="top container">
        <div className="t1">
          <p>English</p>
          <p>USD</p>
        </div>
        <div className="t2">
          <p>Help</p>
          <p>Join Us</p>
        </div>
      </div>
      <div className="bottom">
        <Hero/>
      </div>
      <div className="container text-center">
        <Iconcard/>
        <Enhance/>
        <h1>Products</h1>
      <SliceCard/>
      <Footer/>
      </div>
    </div>
  );
};

export default Header;
