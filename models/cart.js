const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mobiles",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    }
},{
    timestamps: true
})

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;