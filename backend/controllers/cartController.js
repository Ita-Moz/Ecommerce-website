const Cart = require('../models/cartModel');

const cartController = {

  // GET CART BY ID
  getCartById: async (req, res) => {
    try {
      const cart = await Cart.findOne({ _id: req.params.id })
      res.status(200).json(cart)
    } catch (error) {
      res.status(500).json(error)
    }
  },
// CREATE PRODUCT
  createCart: async (req, res) => {
    try {
      const newCart = new Cart(req.body)
      const cart = await newCart.save()
      res.status(200).json(cart)
    } catch (error) {
      res.status(500).json(error)
    }
  },

  // DELETE PRODUCT
  deleteCart: async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json('Delete Cart successfully!')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
module.exports = cartController;