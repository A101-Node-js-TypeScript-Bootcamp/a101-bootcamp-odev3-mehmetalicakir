const productService = require('../services/product')

exports.addProduct = async (req,res) => {
    const response = await productService.addProduct(req.body);
    res.send({response})
}
exports.readAllProducts = async (req,res) => {
    const response = await productService.readAllProducts();
    res.send({response})
}
exports.readProductId = async (req,res) => {
    const response = await productService.readProductId(req.params);
    res.send({response})
}
exports.readProductDiscount = async (req,res) => {
    const response = await productService.readProductDiscount();
    res.send({response})
}