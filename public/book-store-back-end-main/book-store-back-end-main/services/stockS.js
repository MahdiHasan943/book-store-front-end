const Stock=require('../models/Stock')
module.exports.createStockS = async (data) => {
    const result=await Stock.create(data)
    return result;
}
module.exports.getStockS = async () => {
    const result=await Stock.find({})
    return result;
}
module.exports.getStockCbyId = async (id) => {
    const result =await Stock.findOne({_id:id})
 return result;
}