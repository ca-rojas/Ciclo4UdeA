const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please register the product name."],
        trim:true,
        maxLength:[120,"The product name cannot exceed 120 characters"]
    },
    price:{
        type: Number,
        required:[true,"Please register the product price"],
        maxLength:[8,"The product price cannot be more than $99.999.999"],
        default:0.0
    },
    description:{
        type: String,
        required:[true,"Please enter the product description"]
    },
    rating:{
        type: Number,
        default: 0
    },
    image:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type: String,
                requred:true
            }
        }
    ],
    category:{
        type: String,
        required: [true, "Please select the prodcut category"],
        enum: {
            values:[
                "Dry food",
                "Wet food",
                "Accesories",
                "Health and care",
                "Medicine",
                "Snacks",
                "Toys"
            ]
        }
    },
    vendor:{
        type: String,
        required: [true, "Please register the product vendor"]
    },
    inventory:{
        type: Number,
        required: [true, "Please enter the product stock"],
        maxLength: [5, "Max. stock cannot exceed 99.999"],
        default: 0
    },
    totalRatings:{
        type: Number,
        default: 0.0,
    },
    opinions:[
        {
            customerName:{
                type: String,
                required: true,
            },
            rating:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
        }
    ],
    creationDate:{
        type: Date,
        default: Date.now
    }
})
module.exports=mongoose.model("products",productSchema)