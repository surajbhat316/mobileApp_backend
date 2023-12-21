const express = require('express');

const router = express.Router();

const mobileController = require("../controllers/mobileController");

router.get("/", mobileController.getMobiles);
router.post("/search", mobileController.searchMobile);


module.exports = router;