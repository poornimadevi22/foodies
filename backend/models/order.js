const mongoose=require("mongoose");

const dbconnection=async() =>{
  await  mongoose.connect(process.env.MONGODB,{
     useNewUrlParser:true,
     useUnifiedTopology:true,
 }) 
console.log("Connected to MongoDB...")
};


const orderSchema=new mongoose.Schema({
//     DishName:{
//         type:String,
//         required:true
//     },
//    product:{
//         type:String,
//         required:true,
//            },
//     quantity:{
//         type:String,
//         required:true,  
//     },
//     price:{
//         type:String,
//         required:true,  
//     }
items: [
    {
      title: String,
      price: Number,
      quantity: Number,
      total:Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },

})


module.exports= mongoose.model("Orders",orderSchema);
