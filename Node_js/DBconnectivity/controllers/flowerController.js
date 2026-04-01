var express = require("express");

var flowerServices = require('../services/flowerServices');
const { addFlower } = require("../repositories/flowerRepo");

exports.addFlower = (request, response)=>{
    const {flower_id, flower_name, text, price, quantity}=request.body ;
    flowerServices.addFlower(flower_id, flower_name, text, price, quantity, (err,result)=>{
        if(err){
            return response.status(500).json(err);
        }    
        response.json({
            message : "customer added successfully",
            //id : result.insertedvalue
        })
        console.log("data inserted successfully")
    });
}

exports.getAllFlowers = (request, response)=>{
    flowerServices.getAllFlowers((err, result)=>{
        if(err){
            return response.status(500).json(err);
        }
        response.json({
            message: "Flowers Fetched Sucessfully..!"
        })
        console.log("data shown successfully")
    });
    
}