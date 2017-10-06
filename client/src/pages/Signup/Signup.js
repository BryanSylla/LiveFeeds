import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";
import Home  from "../Books";
import Jumbosi from "../../components/Jumbosi";
import Navlo from "../../components/Navlo";
import Footer from "../../components/Footer";


class Signup extends Component {
  state = {
    username: "",
    password:"",
    email: "",
    url1: ""
  };

  componentDidMount() {
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault()

        // get our form data out of state
        const { username, password, email} = this.state;

        axios.post('/auth/signup', { username, password,email})
        .then(res => this.setState({url1 :res.request.responseURL}))
        .catch(err => console.log(err));
       
  };


  render() {
    return (
      (this.state.url1==='http://localhost:3000/home') ? <Home username={this.state.username} /> :
      <Container fluid>
         <div>
        <Navlo />
        <Jumbosi>
          <form onSubmit={this.handleFormSubmit}>
            <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            name="username"
            placeholder="Username (Required)"
            />
            <Input
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            type="password"
            placeholder="Password (Required)"
            />
            <Input
            value={this.state.email}
            onChange={this.handleInputChange}
            name="email"
            type="email"
            placeholder="Email (Required)"
            />
            <button type="submit">Signup</button>
          </form>
        </Jumbosi>
        <Footer />
      </div>
      </Container>
    );
  }
}

export default Signup;
