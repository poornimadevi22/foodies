const express=require('express');
const mongoose=require("mongoose");
const dbconnection=require("./db/database.js");
const reserveRoute=require('./routes/reserveRoute.js');
const orderRoute=require("./routes/orderRoute.js");
const userCollection=require("./models/userSchema.js");
const jwt = require('jsonwebtoken');
const dish = require('./models/dishschema.js');

require("dotenv").config({path:'.env'});


//cors middleware

const app=express();
app.use(express.json());
try{
  const cors=require("cors");
  app.use(
    cors({origin:true,credentials: true})
    );
}catch(err){
}


app.use(express.urlencoded({extended:true}));
app.use('/reservation', reserveRoute);
// app.use('/send', sendReserve);
app.use('/order',orderRoute)
try {

app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD"
  })})
}catch(err){
}

  const JWT_SECRET_KEY = 'secretKey';

  const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token.' });
    }
  };

dbconnection();




app.post("/login",async(req,res)=>{
     const{email,password}=req.body

     try {
        const check= await userCollection.findOne({email:email}).exec()
        if (!check) {
          return res.status(401).json({ message: 'Invalid credentials.' });
        }
      
        const token = jwt.sign({check}, JWT_SECRET_KEY);
        res.json({ token });
      } catch (e) {
         res.json("not existing")
     }

})

app.post('/signup', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if the user with the given email already exists
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = await userCollection.create({ email, password, role });

    // Generate a JWT token for the new user
    const token = jwt.sign({ email: newUser.email,role: newUser.role }, JWT_SECRET_KEY);

    // Respond with the token
    res.json({ token });
  } catch (error) {
    // console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


//dishschema
app.post('/addDish', async (req, res) => {
  const { title, category, price,image } = req.body;

  try {
    // Check if the user with the given email already exists
    const dishData = await dish.create({title:title,price:price,category:category,image:image,tags:[] });
    res.status(200).json({"msg":"dishes added","dish":dishData})
  }catch(err){
    res.status(500).json({ message: 'Internal server error' });
  }
  
    
})

app.put('/updateDishData/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const updatedDish = await dish.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedDish) {
      return res.status(404).json({ message: 'Dish not found' });
    }
    res.json({ message: 'Dish updated successfully', dish: updatedDish });
  } catch (error) {
  //   console.error('Error updating dish:', error);
    res.status(500).json({ message: 'Failed to update dish' });
  }
});

app.post("/deleteDish",async(req,res)=>{
  return res.status(200).json(await dish.deleteOne({_id:req.body.id}));

})

app.get('/getAllDish',async(req,res)=>{
  try{
    return res.status(200).json(await dish.find({}).exec());
  }catch(err){
    res.status(500).json({ message: 'Internal server error' });
  }
})


 app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listening on PORT, ${process.env.PORT}`);
});


