const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
dotenv.config()
const app = express()

//CONNECT TO MONGODB
mongoose
	.connect(process.env.MONGODB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => console.log("Connected to MongoDB"))

app.use(cors())
app.use(express.json())
app.use(cookieParser())

// ROUTES
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)

app.listen(5000, () => {
	console.log("Server is running on port 5000")
})
