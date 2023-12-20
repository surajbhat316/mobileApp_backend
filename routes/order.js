const express = require('express');

const router = express.Router();


const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrders);
router.post("/placeOrder", orderController.placeOrder);






module.exports = router;