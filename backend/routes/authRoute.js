const authController = require("../controllers/authController")
const {verifyToken} = require("../middleware/authMiddleware")
const router = require("express").Router()

// REGISTER
router.post("/register", authController.registerUser)

// LOGIN
router.post("/login", authController.loginUser)

//REFRESH TOKEN
router.post("/refresh", authController.requestRefreshToken);

// LOGOUT
router.get("/logout", verifyToken, authController.logoutUser);

module.exports = router
