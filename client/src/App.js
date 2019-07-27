import React, { Component } from "react";
import Home from "./Pages/Home"
import Nav from "./Components/Nav"
import "./App.css";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';


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
