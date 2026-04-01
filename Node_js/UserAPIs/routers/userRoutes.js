const express = require('express');
const router = express.Router();
const controller = require("../controllers/usersController");

router.post('/addUser',controller.addUser);
router.get('/getAllUsers',controller.getAllUsers);
router.put('/updateUser/:id', controller.updateUser);
router.delete('/deleteUser', controller.deleteUser);


module.exports=router;
