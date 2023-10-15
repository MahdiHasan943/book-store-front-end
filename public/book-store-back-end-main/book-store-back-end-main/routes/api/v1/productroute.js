const express = require('express');
const router = express.Router();
const productsC=require('../../../controller/productController')
router
    .route('/')
    .get(productsC.getProducts)
    .post(productsC.createProducts)

// router.route('/:id')
//     .get() 
   
module.exports = router;