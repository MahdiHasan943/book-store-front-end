const Product=require('../models/products')
module.exports.createProductS = async (data) => {
    const result=await Product.create(data)
    return result;
}
module.exports.getProductS = async () => {
    const result=await Product.find({})
    return result;
}