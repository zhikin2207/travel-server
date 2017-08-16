var express = require('express');

var config = require('./config');

var userController = require('./controllers/user-controller');
var locationController = require('./controllers/location-controller');
var visitController = require('./controllers/visit-controller');

var app = express();

app.get('/users/:id(\\d+)', userController.getUser);
app.get('/users/:id(\\d+)/visits', userController.getUserVisits);
app.post('/users/:id(\\d+)', userController.updateUser);
app.post('/users/new', userController.createUser);

app.get('/locations/:id(\\d+)', locationController.getLocation);
app.get('/locations/:id(\\d+)/avg', locationController.getAverageMark);
app.post('/locations/:id(\\d+)', locationController.updateLocation);
app.post('/locations/new', locationController.createLocation);

app.get('/visits/:id(\\d+)', visitController.getVisit);
app.post('/visits/:id(\\d+)', visitController.updateVisit);
app.post('/visits/new', visitController.createVisit);

app.listen(config.server.port, function () {
    console.log('Server started on %s port', config.server.port);
});
