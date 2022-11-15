const express = require('express');
const apiRouter = express.Router();
const userControllers = require('../controllers/userController');
const exerciseController = require('../controllers/exerciseController');

apiRouter
    .get('/users', userControllers.getUsers)
    .post('/users', userControllers.createUser)
    .post('/users/:_id/exercises', exerciseController.createExercise)
    .get('/users/:_id/logs', exerciseController.getExercises)

module.exports = apiRouter;