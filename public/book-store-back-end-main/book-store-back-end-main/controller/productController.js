const { createProductS ,getProductS} = require("../services/productS")

module.exports.createProducts = async (req, res) => {
    try {
        const result=await createProductS(req.body)
        res.status(200).json({
            status: "success",
            data:result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to post",
            err:err,
        })
    }
}
module.exports.getProducts = async (req, res) => {
    const result=await getProductS(req.body)
    try {
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