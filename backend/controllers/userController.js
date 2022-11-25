const User = require("../models/userModel")

const userController = {
    // GET ALL USERS
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE USER
    deleteUser: async (req, res) => {
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('Delete user successfully!')
        }catch(error){
            res.status(500).json(error)
        }
    }
}
module.exports = userController