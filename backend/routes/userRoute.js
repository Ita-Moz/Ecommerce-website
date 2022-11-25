const router = require("express").Router()
const userController = require("../controllers/userController")
const { verifyToken, verifyTokenAndUserAuthorization } = require("../middleware/authMiddleware")

// GET ALL USERS
router.get("/", verifyToken, userController.getAllUsers)

// DELETE USER
router.delete("/:id", verifyTokenAndUserAuthorization, userController.deleteUser)

module.exports = router
