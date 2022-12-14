const mongoose = require("mongoose")
const Schema = mongoose.Schema

const cartSchema = new mongoose.Schema(
	{
		totalPrice: {
			type: Number
		},
		quantity: {
			type: Number
		},
		product: [
			{
				type: Schema.Types.ObjectId,
				required: true,
				ref: 'product'
			}
		],
		user: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: 'user'
		}
	}
)
module.exports = mongoose.model("cart", cartSchema)
