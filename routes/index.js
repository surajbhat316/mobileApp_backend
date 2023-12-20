const express = require('express');

const router = express.Router();


const mobileController = require("../controllers/mobileController");

router.post("/",  mobileController.create);
router.use("/mobiles", require("./mobile"));

router.use("/cart", require("./cart"));

router.use("/order", require("./order"));


module.exports = router;