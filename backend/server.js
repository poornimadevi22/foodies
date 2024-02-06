const express=require('express');
const mongoose=require("mongoose");
const dbconnection=require("./db/database.js");
const reserveRoute=require('./routes/reserveRoute.js');
const orderRoute=require("./routes/orderRoute.js")

require("dotenv").config({path:'./config/.env'});


//cors middleware

const app=express();
app.use(express.json());
const cors=require("cors");
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);
app.use(express.urlencoded({extended:true}));
app.use('/reservation', reserveRoute);
// app.use('/send', sendReserve);
app.use('/order',orderRoute)
app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD"
  })})



console.log("poori",process.env.PORT)
dbconnection();

app.listen(process.env.PORT || 3000,()=>{
    console.log(`server listening on PORT, ${process.env.PORT}`);
});


