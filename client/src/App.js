import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";
import ShoppingList from "./pages/ShoppingList";



const App = () =>
  <Router>
    <div>
      <Switch>
          <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/home" component={Books}/>
        <Route exact path="/shoppinglist" component={ShoppingList}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
