const express = require('express');
const router = express.Router();
const controller = require("../controllers/flowerController");


router.post('/addFlower',controller.addFlower);
router.get('/getAllFlowers',controller.getAllFlowers);
// router.delete('/delete/:id',controller.deleteCustomer);
// router.put('/updatecustomer/:id',controller.updateCustomer);


module.exports=router;
