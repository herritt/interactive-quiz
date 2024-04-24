const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
	.connect("mongodb://mongo:27017/mydatabase")
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
