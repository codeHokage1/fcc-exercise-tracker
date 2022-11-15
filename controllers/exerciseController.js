const ExerciseModel = require('../models/exercise')
const UserModel = require('../models/user')


// create a new exercise for a user
exports.createExercise = async (req, res) => {
    try {
        const _id = req.body[":_id"];
        const foundUser = await UserModel.findOne({
            "_id": _id
        })
        if (!foundUser) return res.status(404).json({ "message": `User with id ${_id} not found` })
        const { username } = foundUser
        const { description, duration, date } = req.body;
        const newExercise = {
            "userId": _id,
            "description": description,
            "duration": duration,
            "date": date || new Date().toDateString()
        }
        const created = await ExerciseModel.create(newExercise);
        const exercise = {
            "_id": _id,
            "username": username,
            "description": created.description,
            "duration": created.duration,
            "date": created.date
        }
        res.status(201).json(exercise);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "message": "Server error"
        })
    }
}

// get all exercises for a user
exports.getExercises = async (req, res) => {
    try {
        const _id = req.params._id;
        const foundUser = await UserModel.findOne({
            "_id": _id
        })
        if (!foundUser) return res.status(404).json({ "message": `User with id ${_id} not found` })
        const { username } = foundUser;
        const exercises = await ExerciseModel.find({
            "userId": _id
        })
        const count = exercises.length;
        const exercisesList = exercises.map(exercise => {
            return {
                "description": exercise.description,
                "duration": exercise.duration,
                "date": exercise.date
            }
        })
        return res.json({
            "_id": _id,
            "username": username,
            "count": count,
            "log": exercisesList
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "message": "Server error"
        })
    }
}