const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") //Traemos la respuesta json desde el controlador

router.route('/products').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/product/nuevo').post(newProduct); //establecemos la ruta
router.route('/product/:id').get(getProductById); //Ruta para consultar por id
router.route('/product/:id').put(updateProduct);//Creacion de la ruta de actualizacion
router.route('/product/:id').delete(deleteProduct); //Creacion de la ruta de eliminacion por id
 

module.exports=router;