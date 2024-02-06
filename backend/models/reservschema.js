const mongoose=require("mongoose");


const reservationSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3, "should contain minimum of 3 charaters"],
        maxLength:[25, "should not exceed  25 charaters"],   
    },
   lastName:{
        type:String,
        required:true,
        minLength:[3, "should contain minimum of 3 charaters"],
        maxLength:[25, "should not exceed  25 charaters"],   
    },
    date:{
        type:String,
        required:true,  
    },
    time:{
        type:String,
        required:true,
        
    }, 
      phone:{
        type:String,
        required:true,
        minLength:[10, "should contain only 10 digits"],
        maxLength:[10, "should contain only 10 digits"],   
    }
})

module.exports= mongoose.model("Reservation",reservationSchema);
