const router = require("express").Router();

router.use("/", require("./views.js"))
router.use("/api", require("./api.js"))

module.exports = router;