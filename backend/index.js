const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const authRoute = require("./routes/auth")

dotenv.config()
const app = express()

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


app.listen(5000, () => {
	console.log("Server is running on port 5000")
})
