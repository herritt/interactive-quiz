const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose
	.connect("mongodb://mongo:27017/mydatabase")
	.then(() => console.log("MongoDB connected"))
	.catch((err) => console.log("MongoDB connection error:", err));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
