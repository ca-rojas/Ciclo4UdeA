const prod=require("../models/products")
const fetch=(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//create new product /api/products
exports.newProduct=async(req,res,next)=>{
    const product=await prod.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
}

//see the products list
exports.getProducts=async(req,res,next) =>{
    const products=await prod.find();
    res.status(200).json({
        success:true,
        count: prod.length,
        products
        // message: "In this path you will see all the products"
    })
}

//query by ID
exports.getProductById=async(req,res,next)=>{
    const product=await prod.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message: "The product ID you are looking for was not found"
        })
    }
    res.status(200).json({
        success:true,
        message:"This is the information for the product",
        product
    })
}

//update a product
exports.updateProduct=async(req,res,next)=>{
    let product=await prod.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message: "The product ID you are looking for was not found"
        })
    }
    product=await prod.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success: true,
        message: "Product updated successfully",
        product
    })
}

//delete a product
exports.deleteProduct=async(req,res,next)=>{
    const product=await prod.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message: "The product ID you are looking for was not found"
        })
    }
    await prod.remove();
    res.status(200).json({
        success: true,
        message: "Prodcut removed successfully"
    })
}

//FETCH
//list all products
function seeProducts(){
    fetch('http://localhost:4000/api/products')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

// seeProducts();

//get by ID
function seeProductsById(id){
    fetch('http://localhost:4000/api/product/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

// seeProductsById('6346b722e2e727106d362472');