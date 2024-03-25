const mongoose = require('mongoose');


const dishSchema = new mongoose.Schema({
   id: String,
  title: String,
  tags: [String],
  price: String,
  image: String,
  category:String,
  description: String
});

 




const dish=mongoose.model("dishes",dishSchema);

module.exports=dish;