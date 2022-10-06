exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message: "In this path you will see all the products"
    })
}