const User = require('../models').User;

module.exports = {
    create(req, res) {
        return User
            .create({
                username: req.body.username,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error));
    }
}