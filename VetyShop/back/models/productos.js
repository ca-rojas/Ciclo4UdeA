const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Por favor registra el nombre del producto."],
        trim:true,
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]
    },
    price:{
        type: Number,
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0
    },
    description:{
      type:String,
      required:[true,"Por favor registre una descripcion para el producto."]
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
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{
            values:[
                "Alimento seco",
                "Alimento humedo",
                "Accesorios",
                "Cuidado e Higiene",
                "Medicamentos",
                "Snacks",
                "Juguetes"
            ]
        }
    },
    vendor:{
        type:String,
        required:[true,"Por favor registre el vendedor de producto"]
    },
    inventory:{
        type: Number,
        required:[true, "Por favor registre el stock del producto"],
        maxLength:[5,"Cantidad maxima del producto no puede sobrepasar 99999"],
        default:0
    },
    totalRatings:{
        type:Number,
        default:0
    },
    opinions:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    creationDate:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model("products",productsSchema)