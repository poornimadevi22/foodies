const mongoose=require("mongoose");

const newSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'], // Define the roles
        default: 'user' // Default role is user
    }
})

const collection=mongoose.model("users",newSchema);

module.exports=collection;