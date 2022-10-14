const express=require("express")
const router=express.Router();
const {getProducts, newProduct, getProductById, updatePoduct, updateProduct, deleteProduct}=require("../controllers/productsController") //Get JSON answer from controller

router.route('/products').get(getProducts) //set the path for the products list
router.route('/products/new').post(newProduct)
router.route('/product/:id').get(getProductById)
router.route('/product/:id').put(updateProduct)
router.route('/product/:id').delete(deleteProduct)

module.exports=router;