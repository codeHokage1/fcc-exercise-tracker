const UserModel = require('../models/user')

// create new user
exports.createUser = async (req, res) => {
    try {
        const user = await UserModel.create(req.body)
        return res.status(201).json({
            "username": user.username,
            "_id": user._id
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "message": "Server error"
        })
    }
}

// get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        return res.json(users)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            "message": "Server error"
        })
    }
}