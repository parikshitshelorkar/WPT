var express = require("express");

var userServices = require('../services/userServices');
const { matchesGlob } = require("node:path");


exports.addUser = (request, response) => {
    const { first_name, last_name, contact, email, password_hash } = request.body;
    userServices.addUser(first_name, last_name, contact, email, password_hash, (err, result) => {
        if (err) {
            return response.status(500).json(err);

        }
        response.json({
            message: "User Added Sucessfully"
        })
        console.log("Data inserted Sucessfully")
    });

}

exports.getAllUsers = (request, response) => {
    userServices.getAllUsers((err, result) => {
        if (err) {
            return response.status(500).json(err);
        }
        return response.status(200).json(result)        // response.json({
        //     message: "User Fetched Sucessfully!"
    })
    console.log("Data shown Sucessfully.!")
};


exports.updateUser = (request, response) => {
    var id = request.params.id;
    const { first_name, last_name, contact, email, password_hash } = request.body;

    userServices.updateUser(id, first_name, last_name, contact, email, password_hash, (err, result) => {
        if (err) {
            return response.status(500).json(err);
        }
        response.json({
            message: "User Updated Sucessfully..!"
        })
        console.log("User Updated Sucessfully..!")
    })
}

exports.deleteUser = (request, response) => {
    var id = request.params.id;

    userServices.deleteUser(id, (err, result) => {
        if (err) {
            return response.status(500).json(err);
        }
        response.json({
            message: "User Deleted Sucessfully,,!"
        })
        console.log("User Deleted Successfully..!")
    })
}
