import {MongoClient} from 'mongodb';
import config from '../config';
import BaseController from './base-controller';

class UserController extends BaseController {
    getUser (request, response) {

    }

    getUserVisits (request, response) {

    }

    updateUser (request, response) {

    }

    createUser (request, response) {
        let user = request.body;

        // MongoClient.connect(config.url.mongodb, function(err, db) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //
        //     db.collection('users').insertOne(user);
        // });

        super.ok(response);
    }
}

export default UserController;