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
    const items = {
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
        await docClient.put(items).promise();
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

exports.readAllProducts = async (params) => {
    const  items = {
        TableName:table
    };
    try {
        const data = await docClient.scan(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
}
exports.readProductId = async (params) => {
    const items = {
        TableName: table,
        Key:{
            productId: params.productId
        }
    }

    try {
        const data = await docClient.get(items).promise();
        return {
            status: true,
            data: data
        }
    } catch (error) {
        console.log("error");
        return {
            status: false,
            message: error
        }
    }
}
exports.readProductDiscount = async (params) => {
    const items = {
        TableName: table,
    }

    try {
        const data = await docClient.scan(items).promise();
        let discount = [];
        data.Items.forEach(element => {
            if(element.isDiscount==true){
            discount.push(element)}
        });
        return {
            status: true,
            data:discount
        }
    } catch (error) {
        console.log("error");
        return {
            status: false,
            message: error
        }
    }
}