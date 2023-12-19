const Mobiles = require("../models/mobiles");

module.exports.create = async (req, res)=>{
    console.log(req.body);
    await Mobiles.create({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        processor: req.body.processor,
        memory: req.body.memory,
        OS: req.body.OS
    });
    return res.redirect('back');
}



module.exports.getMobiles = async (req, res) => {
    try {
        let mobiles = await Mobiles.find({});
        if(mobiles){
            return res.status(200).json({
                mobiles: mobiles
            })
        }
        return res.status(400).json({
            mobiles: []
        })

    } catch (error) {
        return res.status(400).json({
            mobiles: []
        })
    }
    
    
}