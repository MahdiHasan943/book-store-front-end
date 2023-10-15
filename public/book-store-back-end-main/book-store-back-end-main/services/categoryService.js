const Category=require('../models/category')
module.exports.createCategory = async (data) => {
    const result = await Category.create(data);
    return result
}
module.exports.getCategory = async () => {
    const result = await Category.find({})
    return result;
    
}
// module.exports.getProductServices = async () => {
//     const brands = await Category.find({}).select('-products,-suppliers');
//     return brands
// }
// module.exports.getProductByIdServices = async (id) => {
//     const brands = await Category.findOne({ _id: id })
//     return brands;
// }