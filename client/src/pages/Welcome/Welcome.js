import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Welcome extends Component {

  render() {
    return (
       <div>
        <Nav />
        <Jumbotron>
          <h1>LIVE FEEDS</h1>
          <h2>Feeding Your Food Live</h2>
          <p>As a food enthusiast, I would like to reduce the time and effort I spend shopping in the store...
          <br/>
          Because I want to spend more time cooking, and less time at the store.
          </p>
          <button id="signup" className="btn btn-primary btn-lg" href="#" ><Link to="/signup">Sign Up</Link></button>
        </Jumbotron>
        <Footer />
      </div>
    );
  }
}

export default Welcome;
