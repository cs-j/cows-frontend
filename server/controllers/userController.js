let mongoose = require("mongoose");
let User = require("../data/user");
let _ = require("underscore");

let router = require("express").Router();
router.route("/users/:id?").get(getUsers).post(addUser).delete(deleteUser);

function getUsers(req, res) {
    User.find(function (err, users) {
        if (err)
            res.send(err);
        else
            res.json(users);
    });
}

function addUser(req, res) {
    let user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(user);
    });
}

function deleteUser(req, res) {
    let id = req.params.id;
    User.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;
