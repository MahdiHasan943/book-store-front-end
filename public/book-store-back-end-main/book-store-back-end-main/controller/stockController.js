const { createStockS, getStockS ,getStockCbyId} = require("../services/stockS")

module.exports.createStock = async (req, res) => {
    try {
        const result = await createStockS(req.body);
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to post",
            err:err,
        })
    }
}
module.exports.getStock = async (req, res) => {
    try {
        const result=await getStockS(req.body)
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}
module.exports.getStockById = async (req, res) => {
    try {
        const {id}=req.params
        const result=await getStockCbyId(id)
        res.status(200).json({
            status: "success",
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to getById",
            err:err,
        })
    }
}