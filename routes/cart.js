const express = require('express');

const router = express.Router()


const cartController = require("../controllers/cartController");

router.get("/", cartController.getCartItems);

router.post("/addItem", cartController.addItemToCart);

router.post("/deleteItem", cartController.deleteItemFromCart);




module.exports = router;