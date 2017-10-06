import React from "react";
import { Link } from "react-router-dom";
import "./Navhome.css";

const Navhome = () => (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          <img alt="Brand" src={"/logos.png"} />
        </a>
        <div className="alignright">
          <button id="sign" href="#" className="btn btn-default navbar-btn"><Link to="/shoppinglist">Your Shopping List</Link></button>
        
        </div>
      </div>
    </div>
  </nav>
);

export default Navhome;
