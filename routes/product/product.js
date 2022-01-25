const express = require('express');
let router = express.Router();
let productController = require('../../controllers/product')

router.post('/', productController.addProduct);
router.get('/', productController.readAllProduct);
router.get('/productId/:productId', productController.readProductId);
router.get('/discount', productController.readProductDiscount);

module.exports = router;