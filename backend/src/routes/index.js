const router = require("express").Router();

const questionRoutes = require("./question");
const userRoutes = require("./userRoutes");
const tokenRoutes = require("./tokenRoutes");

router.use("/api/questions", questionRoutes);
router.use("/api/user", userRoutes);
router.use("/api/token", tokenRoutes);

module.exports = router;
