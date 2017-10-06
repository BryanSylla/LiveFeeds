import React from "react";
import { Link } from "react-router-dom";
import "./Navlo.css";

const Navlo = () => (

  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand">
          <img alt="Brand" src={"/logos.png"} />
      	</a>
        <button href="#" type="button" id="home" className="btn btn-default btn-lg">
          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span></Link>
        </button>
    	</div>
    </div>
	</nav>
);

export default Navlo;
