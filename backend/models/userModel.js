const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			minLength: 4,
			maxLength: 16,
			unique: true
		},
		email: {
			type: String,
			required: true,
			maxLength: 50,
			unique: true
		},
		password: {
			type: String,
			required: true,
			minLength: 6
		},
		isAdmin: {
			type: Boolean,
			default: false
		},
		verifyRefreshToken: {
			type: String,
			default: ""
		}
	},
	{ timestamps: true }
)
module.exports = mongoose.model("User", userSchema)
