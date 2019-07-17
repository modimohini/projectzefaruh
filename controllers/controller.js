// var express = require("express");
// var router = express.Router();
// var app = express()
// var bodyParser = require("body-parser");

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(bodyParser.json());

// const orm = require('../config/orm.js');

// router.get("/", function (req, res) {
//     orm.selectAll(function (error, data) {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             res.render('index', {
//                 burger: data
//             });
//         }
//     })
// });

// router.post("/", function (req, res) {
//     orm.insertOne(req.body, function (error, data) {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//             res.redirect("/")

//         }
//     })
// })

// router.put("/", function (req, res) {
//     orm.updateOne(req.body, function (error, data) {
//         if (error) {
//             console.log(error);
//             res.sendStatus(500);
//         } else {
//              res.json(data);
//         }
//     })
// })
// module.exports = router