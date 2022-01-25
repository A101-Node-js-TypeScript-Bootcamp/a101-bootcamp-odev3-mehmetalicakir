var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

AWS.config.update({
  region: process.env.region,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  endpoint: process.env.endpoint
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = process.env.table;

exports.addProduct = async (params) => {
    const item = {
        TableName: table,
        Item:{
            productId: uuidv4(),
            stock: params.stock,
            productName: params.productName,
            isDiscount: params.isDiscount,
            category: params.category
        }
    }

    console.log("Adding a new product...");

    try {
        await docClient.put(item).promise();
        return{
            status:true,
            message: "Product added."
        }
    } catch (error) {
        console.log("error");
        return {
            status: false,
            message: error
        }
    }

}

exports.readAllProduct = async (params) => {
    
}
exports.readProductId = async (params) => {
    
}
exports.readProductDiscount = async (params) => {
    
}