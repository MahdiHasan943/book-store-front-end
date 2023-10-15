const Brand=require('../models/brand')
module.exports.createBS = async (data) => {
    const result=await Brand.create(data)
    return result;
}

module.exports.getBS = async () => {
    const result=await Brand.find({})
    return result;
}