import React, { Component } from "react";
import axios from "axios";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import Jumbotron from "../../components/Jumbotron2";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Navlo from "../../components/Navshop";

class ShoppingList extends Component {
  state = {
    ShoppingList:"",
    email:""
    
  };
  componentWillMount() {
    if(this.props.username){
      this.SaveUserInfo(this.props.username);
    }

    var data= API.getsession();
    this.setState({sessionusername:data});
  }
  componentDidMount() {
    
    this.loadShoppingList(this.state.sessionusername);
  }

  SaveUserInfo=(usersession)=>{
    API.savesession(usersession);
   };

   loadShoppingList = (user) => {
    API.getShoppingList(user)
      .then(res => this.setState({ShoppingList:res.data[0].local.shoppinglist}))//console.log(res.data[0].local.shoppinglist))
      .catch(err => console.log(err));
  };
sendEmail =(user) =>{
  API.getemail(user)
     .then(res => this.setState({email:res.data.local.email})) ////console.log(res.data.local.email)
     .catch(err => console.log(err));
};

//   deleteArticle = id => {
//     API.deletesavedArticle(id)
//       .then(res => this.loadsavedArticles())
//       .catch(err => console.log(err));
//   };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  render() {

    
    return (
      <Container fluid>
         <Row>
          <Col size="md-12">
          <Navlo />
            <Jumbotron>
              <h1>{this.state.sessionusername} Shopping List</h1>
            </Jumbotron>
            {this.state.ShoppingList.length ?
            (<button onClick={() => this.sendEmail(this.state.sessionusername)}>Send Shopping List to Email</button>):(<h5>There is no Shopping List to Email</h5>) }
            {this.state.ShoppingList.length ? (
              <List>
                {this.state.ShoppingList.map(shoppinglistitem  => 
                  <ListItem >
                     
                         {shoppinglistitem}
                    
                  </ListItem>
                )}
              </List>
            ) : (
              <h3>Your Shopping List is Empty</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShoppingList;
