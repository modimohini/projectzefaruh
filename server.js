const express = require("express");
//  const path = require("path");

const session = require("express-session");

// const passport = require("./config/passport")

// LocalStrategy = require('passport-local').Strategy;

const db = require('./models')

const PORT = process.env.PORT || 3001;
const app = express();
// const mysql = require('mysql');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

var routes = require("./controllers/controller.js");

// app.use(routes);
// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs




app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// })

db.sequelize.sync().then(function(){ 
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})