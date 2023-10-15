const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const storeController=require('../../../controller/storeController')
router
    .route('/')
    .get(storeController.getStore)
    .post(storeController.createStore)

router
    .route('/:id')
    .get(storeController.getStoreById)

module.exports = router;
