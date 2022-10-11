const prod=require("../models/products")

//see the products list
exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "In this path you will see all the products"
    })
}

//create new product /api/products
exports.newProduct=async(req,res,next)=>{
    const product=await prod.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
}