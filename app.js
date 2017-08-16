import express from 'express';
import bodyParser from 'body-parser';

import config from './config';
import UserController from './controllers/user-controller';
import LocationController from './controllers/location-controller';
import VisitController from './controllers/visit-controller';

const app = express();
const userController = new UserController();
const locationController = new LocationController();
const visitController = new VisitController();

app.use(bodyParser.json());

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
