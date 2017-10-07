import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";
import Home  from "../Books";
import Jumbolo from "../../components/Jumbolo";
import Navlo from "../../components/Navlo";
import Footer from "../../components/Footer";

class Login extends Component {
  state = {
   username: "",
   password:"",
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
        const { username, password } = this.state;

        axios.post('/auth/login', { username, password})
        .then(res => this.setState({url1 :res.request.responseURL}))
        .catch(err => console.log(err))

       };



  render() {
    return (
      (this.state.url1==='http://localhost:3000/home') ? <Home username={this.state.username} /> :
      <Container fluid>
       <div>
        <Navlo />
        <Jumbolo>
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
            <button type="submit">Login</button>
          </form>
        </Jumbolo>
        <Footer />
      </div>
      </Container>
    );
  }
}

export default Login;
