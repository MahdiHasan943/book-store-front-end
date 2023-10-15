const { createBS, getBS } = require("../services/brandS")

module.exports.createBrand = async (req, res) => {
    try {
        const brand = await createBS(req.body);
        res.status(200).json({
            status: "success",
            data:brand
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to post",
            err:err,
        })
    }
}
module.exports.getBrand = async (req, res) => {
    try {
        const brand=await getBS(req.body)
        res.status(200).json({
            status: "success",
            data:brand
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}