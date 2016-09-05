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
    },
    list(req, res) {
        return User
            .all()
            .then(user => res.status(200).send(user))
            .catch(error => res.status(400).send(error));
    },
    retrieve(req, res) {
        return User
            .findById(req.params.userId, {})
            .then(user => {
                if(!user){
                    return res.status(404).send({
                        message: 'User does not exist',
                    });
                }
                return res.status(200).send(user)
            })
            .catch(error => res.status(400).send(error));
    },
    delete(req, res) {
        return User
            .findById(req.params.userId, {})
            .then(user => {
                if(!user){
                    return res.status(404).send({
                        message: 'User does not exist',
                    })
                }
                return user
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));

            })
            .catch(error => res.status(400).send(error));
    }
}