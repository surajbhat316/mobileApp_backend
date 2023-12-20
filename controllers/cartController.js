const Cart = require("../models/cart");

module.exports.getCartItems = async (req, res)=>{
    try {
        let cartItems = await Cart.find({});
        console.log(cartItems);
        if(cartItems.length > 0){
            return res.status(200).json({
                message: "Cart Items Present",
                cartItems: cartItems
            })
        }
        return res.status(400).json({
            message: "Cart Items Not Found",
            cartItems: []
        }) 
    } catch (error) {
        return res.status(500).json({
            cartItems: [],
            message: "Internal Server Error"
        })
    }
}


module.exports.addItemToCart = async (req, res)=>{
    console.log(req.body);

    try {
        let cartItem = await Cart.findOne({
            product_id: req.body.id
        });
        console.log(cartItem);
        if(cartItem) {
            cartItem.quantity = cartItem.quantity + 1;
            cartItem.price = req.body.price * cartItem.quantity;
            await cartItem.save();
            return res.status(200).json({
                message: "Cart item Updated"
            })
        }
        let newCartItem = await Cart.create({
            name: req.body.name,
            product_id: req.body.id,
            quantity: 1,
            price: req.body.price,
            unitPrice: req.body.price
        })

        return res.status(200).json({
            message: "New Cart Item Added"
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


module.exports.deleteItemFromCart = async (req, res)=>{
    console.log(req.body)
    try {
        let cartItem = await Cart.findOne({
            product_id: req.body.id
        });
        console.log(cartItem);

        if(cartItem){
            if(cartItem.quantity === 1){
                await Cart.deleteOne({product_id: req.body.id});
                return res.status(200).json({
                    message: "Cart Item removed successfully"
                });
            }
            else{
                cartItem.quantity = cartItem.quantity - 1;
                cartItem.price = cartItem.quantity * req.body.price;
                await cartItem.save();
                return res.status(200).json({
                    message: "Cart Item qty decreased successfully"
                });
            }
        }
        return res.status(400).json({
            message: "Could not find cart item"
        });


    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}