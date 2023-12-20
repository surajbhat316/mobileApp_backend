const Orders = require("../models/orders");
const Cart = require("../models/cart");

module.exports.getAllOrders = async (req, res)=>{

    try {
        let orders = await Orders.find({});
        if(orders.length > 0){
            return res.status(200).json({
                message: "Orders fetched successfully",
                orders: orders
            })
        }
        return res.status(200).json({
            message: "Orders not available",
            orders: []
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            orders: []
        })
    }

}


module.exports.placeOrder = async (req, res) =>{
    try {
        console.log(req.body);

        let orders = await Orders.create([...req.body]);
        await Cart.deleteMany({});
        return res.status(200).json({
            message: "Order placed and Cart Cleared "
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
        })
    }
}