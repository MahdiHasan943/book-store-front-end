const { createStoreS, getStore } = require("../services/storeService")

module.exports.createStore = async (req, res) => {
    try {
        const result = await createStoreS(req.body);
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
module.exports.getStore = async (req, res) => {
    try {
        const result =await getStore(req.body)
        res.status(200).json({
            status: "success",
            data:result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to get",
            err:err,
        })
    }
}


module.exports.getStoreById = async (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            data:'id'
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fail to post",
            err:err,
        })
    }
}
