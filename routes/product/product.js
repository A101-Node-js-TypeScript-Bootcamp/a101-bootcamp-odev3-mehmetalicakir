const express = require('express');
let router = express.Router();
let productController = require('../../controllers/product')

router.post('/', productController.addProduct);

module.exports = router;