const router = require("express").Router()
const cartController = require("../controllers/cartController")
const { verifyToken, verifyTokenAndUserAuthorization } = require("../middleware/authMiddleware")

// GET CART BY ID
router.get("/:id",verifyToken ,cartController.getCartById)

// CREATE PRODUCT
router.post("/", verifyToken, cartController.createCart)

// DELETE PRODUCT
router.delete("/:id", verifyToken, cartController.deleteCart)

module.exports = router
