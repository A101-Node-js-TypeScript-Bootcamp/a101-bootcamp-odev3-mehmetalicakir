const productService = require('../services/product')

exports.addProduct = async (req,res) => {
    const response = await productService.addProduct(req.body);
    res.send({response})
}