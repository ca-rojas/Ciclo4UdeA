const app=require("./app");
const connectDatabase = require("./config/database");

//Set the configuration file
const dotenv=require("dotenv");
dotenv.config({path:"back/config/config.env"})

//DB configuration
connectDatabase();

//call the server
const server=app.listen(process.env.PORT, ()=>{
    console.log(`Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`)
})