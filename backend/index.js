const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
dotenv.config()
const app = express()

//CONNECT TO MONGODB
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Connected to MongoDB"))

app.use(cors({credentials:true,
	origin: "https://ecommerce-website-ita.vercel.app"}))
app.use(express.json())
app.use(cookieParser())
// Mã hoá bằng secret key cho cookies
// app.use(cookieParser(process.env.COOKIE_SECRET_KEY))
// Get cookie được mã hoá bằng req.signedCookies

// ROUTES
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/product", productRoute)
app.use("/api/cart", cartRoute)

app.listen(5000, () => {
	console.log("Server is running on port 5000")
})
