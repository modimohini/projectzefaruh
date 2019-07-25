var db = require("../models");

module.exports = function (app) {

    app.post("/api/events", function (req, res) {
        console.log(req.body);
        db.Event.create({
           
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err)
            // res.status(409).json(err.errors[0].message);
        });
    });

    app.get("/api/events", function (req, res) {
        db.Event.findAll().then(function (dbEvents) {
            return res.json(dbEvents)
        })
    })


}