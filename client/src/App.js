import React, { Component } from "react";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import UserForm from "./Components/UserForm";
import "./App.css";
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';
// import Button from '@material-ui/core/Button';


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./Pages/UserPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
require('dotenv').config()


class App extends Component {

  
  
  render() {

    
    return (
      
    <Router>
      <div>
        <Nav/>
     
        <Switch>

      <Route exact path="/" component={Home} /> 
      <Route exact path="/myaccount" component={UserPage} /> 
      <Route exact path ="/signUp" component= {SignUp}/>
      <Route exact path ="/signIn" component= {SignIn}/>
     
      <Home/>

      </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
