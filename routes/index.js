const express = require('express');

const router = express.Router();

//it will have functionalities fron another file

const home_controller = require('../controller/home_controller');

 router.get('/create',home_controller.create);
router.get('/',home_controller.welcome);

//it will redirect to another page
router.get('/delete-list',home_controller.delete)
router.get('/sign-in',home_controller.sign_in);
router.get('/sign-up',home_controller.sign_up);
router.post('/createSession',home_controller.createSession);
router.post('/createsign-up',home_controller.createsign_up)

module.exports = router;