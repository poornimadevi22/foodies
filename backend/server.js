const express=require('express');
const mongoose=require("mongoose");
const dbconnection=require("./db/database.js");
const reserveRoute=require('./routes/reserveRoute.js');
const orderRoute=require("./routes/orderRoute.js");
const userCollection=require("./db/mongo.js");
const jwt = require('jsonwebtoken');

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
  console.log(err)
}

// const { findById } = require('./models/reservschema.js');
// // app.use(
// //   cors({
// //     origin: [process.env.FRONTEND_URL],
// //     methods: ["POST"],
// //     credentials: true,
// //   })
// // );
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
  console.log(err)
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

console.log("poori",process.env.PORT)
dbconnection();




app.post("/login",async(req,res)=>{
     const{email,password}=req.body

     try {
        const check= await userCollection.findOne({email:email})
        if (!check) {
          return res.status(401).json({ message: 'Invalid credentials.' });
        }
      
        const token = jwt.sign({ email }, JWT_SECRET_KEY);
        res.json({ token });
      } catch (e) {
        console.log(e)
         res.json("not existing")
     }

})

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user with the given email already exists
    const existingUser = await userCollection.findOne({ email });

    if (existingUser) {
      return res.status(401).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = await userCollection.create({ email, password });

    // Generate a JWT token for the new user
    const token = jwt.sign({ email: newUser.email }, JWT_SECRET_KEY);

    // Respond with the token
    res.json({ token });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


 app.listen(process.env.PORT || 4000,()=>{
    console.log(`server listening on PORT, ${process.env.PORT}`);
});


