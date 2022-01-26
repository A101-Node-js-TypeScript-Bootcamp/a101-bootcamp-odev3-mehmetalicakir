const express = require('express');
let router = express.Router();
let productController = require('../../controllers/product')

router.post('/', productController.addProduct);
router.get('/', productController.readAllProducts);
router.get('/productId/:productId', productController.readProductId);
router.get('/discount', productController.readProductDiscount);
router.delete('/', productController.deleteProduct);

module.exports = router;