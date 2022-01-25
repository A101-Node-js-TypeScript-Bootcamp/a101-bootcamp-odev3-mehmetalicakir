var AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: '../.env' })

AWS.config.update({
  region: process.env.region,
  accessKeyId: process.env.accessKeyId,
  secretAccessKey: process.env.secretAccessKey,
  endpoint: process.env.endpoint
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = process.env.table;

exports.addProduct = async(params) => {
    const item = {
        TableName:table,
        Item:{
            productId: uuidv4(),
            
            
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
        return {
            status: false,
            message: error
        }
    }

}
