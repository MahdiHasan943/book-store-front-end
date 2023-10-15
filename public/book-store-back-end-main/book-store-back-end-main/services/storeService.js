const Store =require('../models/Store')
module.exports.createStoreS = async (data) => {
 const result =await Store.create(data)
    return result;
}
module.exports.getStore = async () => {
    const resutl = await Store.find({})
    return resutl;
}