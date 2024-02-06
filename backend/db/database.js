const mongoose=require("mongoose");


const dbconnection=async() =>{
     await  mongoose.connect(process.env.MONGODB,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }) 
console.log("Connected to MongoDB...")
};

module.exports=dbconnection;

