const express = require('express');
const router = express.Router();
const stockC=require('../../../controller/stockController')
router
    .route('/')
    .get(stockC.getStock)
    .post(stockC.createStock)

router.route('/:id')
    .get(stockC.getStockById) 
   
module.exports = router;