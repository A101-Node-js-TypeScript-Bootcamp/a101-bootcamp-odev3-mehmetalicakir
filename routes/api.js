const express = require('express');
let router = express.Router();

const productEndpoint = require('./user/user')

router.use('/product', productEndpoint)


module.exports = router;