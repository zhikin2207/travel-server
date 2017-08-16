var MongoClient = require('mongodb').MongoClient;
var mongoUrl = require('../config').url.mongodb;

module.exports.getUser = function (request, response) {
};

module.exports.getUserVisits = function (request, response) {
};

module.exports.updateUser = function (request, response) {
};

module.exports.createUser = function (request, response) {
    MongoClient.connect(mongoUrl, function(err, db) {
        var user = {
            "id": 3,
            "email": "foobar@mail.ru",
            "first_name": "Маша",
            "last_name": "Пушкина",
            "gender": "f",
            "birth_date": 365299200
        };

        db.collection('users').insertOne(user, function(err, result) {
            if (err === null) {
                db.close();
                response.send({});
            }
        });
    });
};
