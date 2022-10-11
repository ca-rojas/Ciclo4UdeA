const express=require("express")
const router=express.Router();
const {getProducts, newProduct}=require("../controllers/productsController") //Get JSON answer from controller
router.route('/products').get(getProducts) //set the path for the products list
router.route('/products/new').post(newProduct)
module.exports=router;
