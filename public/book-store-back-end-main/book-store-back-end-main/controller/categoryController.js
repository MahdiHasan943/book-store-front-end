const { getCategory,createCategory } = require("../services/categoryService");

module.exports.getcateGory = async (req, res, next) => {
    try { 
        // const result = await (req.body);
        const result=await getCategory()
        console.log(result);
        res.status(200).json({
            status: "getP success",
            data: result,
        });
    } catch (e) {
        // Correct the typo in the error response
        res.status(400).json({
            error: e.message,
            status: 'fail to getP' // Corrected typo here as well
        });
        // If using this in an Express.js middleware, pass the error to the next middleware
        // next(e);
    }
};


module.exports.createCategory = async (req, res, next) => {
    try {
        const result = await getCategory(req.body);
        console.log(result);

        res.status(200).json({
            status:'success',
            data: result
        })
    }
    catch (err) {
        res.status(500).json({
            status: "fial to post",
            err:err,
        })
 }
}