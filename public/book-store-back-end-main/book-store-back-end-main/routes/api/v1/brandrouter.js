const express = require('express');
const router = express.Router();
const brandC=require('../../../controller/brandController')
router
    .route('/')
    .get(brandC.getBrand)
    .post(brandC.createBrand)

router.route('/:id')
    .get() 
   
module.exports = router;