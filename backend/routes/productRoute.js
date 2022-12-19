const router = require("express").Router()
const productController = require("../controllers/productController")
const { verifyToken, verifyTokenAndUserAuthorization } = require("../middleware/authMiddleware")

// GET ALL PRODUCTS
router.get("/", productController.getAllProducts)

// GET PRODUCTS BY ID
router.get("/:id", productController.getProductById)

// CREATE PRODUCT
router.post("/", verifyTokenAndUserAuthorization, productController.createProduct)

// DELETE PRODUCT
router.delete("/:id", verifyTokenAndUserAuthorization, productController.deleteProduct)

module.exports = router
