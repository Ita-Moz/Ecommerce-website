const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const authController = {
	registerUser: async (req, res) => {
		try {
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(req.body.password, salt)

			//Create a new user
			const newUser = await new User({
				username: req.body.username,
				email: req.body.email,
				password: hashedPassword
			})

			//Save user and respond
			const user = await newUser.save()
			res.status(200).json(user)
		} catch (error) {
			res.status(500).json(error)
		}
	},

	loginUser: async (req, res) => {
		try {
			const user = await User.findOne({ username: req.body.username })
			if (!user) {
				res.status(400).json("Wrong username!")
			}
			const validPassword = await bcrypt.compare(req.body.password, user.password)
			if (!validPassword) {
				res.status(400).json("Wrong password!")
			}
			if (user && validPassword) {
				res.status(200).json(user)
			}
		} catch (error) {
			res.status(500).json(error)
		}
	}
}
module.exports = authController
