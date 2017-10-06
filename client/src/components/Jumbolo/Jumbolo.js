import React from "react";
import "./Jumbolo.css";

const Jumbolo = ({ children }) => (
  <div className="jumbotron" style={{ height: '87vh' }}>
    <div className="container">
      <h1>LIVE FEEDS</h1>
      <h2>Feeding Your Food Live</h2>
      {children}
    </div>
  </div>
);

export default Jumbolo;
