const Product = require('../models/productModel');

const productController = {
  // GET ALL PRODUCTS
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().populate('category')
      res.status(200).json(products)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  // GET PRODUCTS BY ID
  getProductById: async (req, res) => {
    try {
      const product = await Product.findOne({ _id: req.params.id }).populate('category')
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error)
    }
  },
// CREATE PRODUCT
  createProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body)
      const product = await newProduct.save()
      res.status(200).json(product)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  // DELETE PRODUCT
  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id)
      res.status(200).json('Delete product successfully!')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
module.exports = productController;