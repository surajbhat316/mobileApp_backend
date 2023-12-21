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

module.exports.searchMobile = async (req, res)=>{

    try {
        const {searchText, filterOption } = req.body;
        console.log(searchText);
        console.log(filterOption);

        if(filterOption ==="name"){
            let mobiles = await Mobiles.find({name: {$regex: searchText}})
            if(mobiles.length === 0){
                return  res.status(200).json({
                    message: "No mobiles found",
                    mobiles: []
                })
            }
            return res.status(200).json({
                message: "Mobiles Found",
                mobiles: mobiles
            });
        }
        else if(filterOption ==="processor"){
            let mobiles = await Mobiles.find({processor: {$regex: searchText}});
            if(mobiles.length === 0){
                return  res.status(200).json({
                    message: "No mobiles found",
                    mobiles: []
                })
            }
            return res.status(200).json({
                message: "Mobiles Found",
                mobiles: mobiles
            });
        }
        else if(filterOption === "type"){
            let mobiles = await Mobiles.find({type: {$regex: searchText}});
            if(mobiles.length === 0){
                return  res.status(200).json({
                    message: "No mobiles found",
                    mobiles: []
                })
            }
            return res.status(200).json({
                message: "Mobiles Found",
                mobiles: mobiles
            });
        }
        else if(filterOption === "OS"){
            let mobiles = await Mobiles.find({OS: {$regex: searchText}});
            if(mobiles.length === 0){
                return  res.status(200).json({
                    message: "No mobiles found",
                    mobiles: []
                })
            }
            return res.status(200).json({
                message: "Mobiles Found",
                mobiles: mobiles
            });
        }
        else{
            let mobiles = await Mobiles.find({memory: {$regex: searchText}});
            if(mobiles.length === 0){
                return  res.status(200).json({
                    message: "No mobiles found",
                    mobiles: []
                })
            }
            return res.status(200).json({
                message: "Mobiles Found",
                mobiles: mobiles
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            mobiles: []
        })
    }
}