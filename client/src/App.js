import React, { Component } from "react";
import Home from "./Pages/Home"
import Nav from "./Components/Nav"
import "./App.css";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./Pages/UserPage";

class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Nav/>
      <Switch>

      
      <Route exact path="/" component={Home} /> 
      <Route exact path="/myaccount" component={UserPage} /> 
     
      <Home/>

      </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
