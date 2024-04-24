const router = require("express").Router();

const questionRoutes = require("./question");

router.use("/api", questionRoutes);

module.exports = router;
