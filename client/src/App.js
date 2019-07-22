import React, { Component } from "react";
import Home from "./Pages/Home"
import "./App.css";
import Nav from './Components/Nav'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      
      <Nav/>
       <Home/>

    </Router>

    );
  }
}

export default App;
