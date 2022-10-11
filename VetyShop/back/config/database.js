const mongoose=require("mongoose");
const connectDatabase=()=>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`MongoDB connected to the server: ${con.connection.host}`)
    }).catch(con=>{
        console.log(`Could not connect MondoDB`)
    })
}

module.exports=connectDatabase;