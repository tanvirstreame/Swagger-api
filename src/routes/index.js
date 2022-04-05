const router = require("express").Router();

router.use("/customer", require("./customer.route"));

module.exports = router;
