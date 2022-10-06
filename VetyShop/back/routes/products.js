const express=require("express")
const router=express.Router();
const {getProducts}=require("../controllers/productsController") //Get JSON answer from controller
router.route('/products').get(getProducts) //set the path for the products list
module.exports=router;