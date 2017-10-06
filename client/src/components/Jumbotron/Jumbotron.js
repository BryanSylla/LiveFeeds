import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div style={{ height: '87vh' }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
