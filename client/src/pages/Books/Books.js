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
import ShoppingList from "../ShoppingList";
import Navlo from "../../components/Navhome";

class Books extends Component {
  state = {
    username:"",
    recipes: [],
    ingredients: [],
    query: "",
    
  };
  componentWillMount() {
    if(this.props.username)
      this.SaveUserInfo(this.props.username);
  }
  componentDidMount() {
    var data= API.getsession();
    this.setState({sessionusername:data});
  }

  SaveUserInfo=(usersession)=>{
    API.savesession(usersession);
   };

  loadRecipes = (res) => {
    
        this.setState({ recipes: res.data.results, query: "" });
        //console.log(this.state.recipes);

  };

   loadIngredients = (res) => {
    
        this.setState({ ingredients: res.data.extendedIngredients, query: "" });
        //console.log(this.state.ingredients);

  };


   showIngredients=(recipe_id) => {
    API.getIngredients(recipe_id)
        .then(res => this.loadIngredients(res))
        
  };

    saveIngredients= (user,ingredientlist) => {
      API.saveIngredients(user,ingredientlist)
      .catch(err => console.log(err));
    };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.query) {

      API.getRecipes(this.state.query)
        .then(res => this.loadRecipes(res))
        //.catch(err => console.log(err));
    }
  };



  render() {
    return (

      <Container fluid>
      
        <Row>
          <Col size="md-12">
          <Navlo />
            <Jumbotron>
              <h2>Hello {this.state.sessionusername}, What Recipe Would You Like to Look For?</h2>
            </Jumbotron>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="What recipe are you looking for (required)?"
              />
              
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Search
              </FormBtn>
            </form>
          </Col>
         
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Recipes</h1>
            </Jumbotron>
            {this.state.recipes.length ? (
              <List>
                {this.state.recipes.map(recipe => (
                  <ListItem key={recipe.id}>
                      <strong onClick={() => this.showIngredients(recipe.id)}>
                        {recipe.title}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Recipes to Display</h3>
            )}
          </Col>
         
          <Col size="md-6">
            <Jumbotron>
              <h1>Ingredients</h1>
            </Jumbotron>
            {this.state.ingredients.length ?
            (<button onClick={() => this.saveIngredients(this.state.sessionusername, this.state.ingredients)}>Add to Shopping List</button>):(<h5>There are no Ingredients to Save</h5>) }
            {this.state.ingredients.length ? (
              <List>
                {this.state.ingredients.map(ingredient => (
                  <ListItem key={ingredient.id}>
                  <Row>
                  <Col size="md-6">
                    
                      <strong>
                        {ingredient.name} 
                      </strong>
                    </Col>
                    <Col size="md-3">
                    <img src={ingredient.image} alt={ingredient.name} />
                    </Col>
                    <Col size="md-3">
                    <DeleteBtn onClick={() => this.deleteArticle(ingredient.id)} />
                    </Col>
                    </Row>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Ingredients to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
