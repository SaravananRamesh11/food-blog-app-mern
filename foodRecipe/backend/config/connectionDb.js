const mongoose=require("mongoose")
require("dotenv").config()
const connectDb=async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("connected..."))
}

module.exports=connectDb