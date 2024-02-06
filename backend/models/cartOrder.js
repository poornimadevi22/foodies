// const mongoose=require("mongoose");


const cartOrderSchema = new mongoose.Schema({
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
  });
  
//   const Order = mongoose.model('CartOrder', cartOrderSchema)