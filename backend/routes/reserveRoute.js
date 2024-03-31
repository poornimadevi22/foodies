const express=require("express");
const router= express.Router();
const reservationSchema=require("../models/reservschema")



router.post("/send", (async (req,res,next)=>{
    const{firstName,lastName,date,time,phone}=req.body;
     if(!firstName || !lastName || !date || !time || !phone){
         return res.status(500).json({
            success:"false",
            message:"Please fill the form"
         })
        
     }try { 
         await  reservationSchema.create({firstName,lastName,date,time,phone});
         res.status(200).json({
             success:"true",
             message:"Reservation done successfully!!"
         })
     } catch (error) {
         console.error("something went wrong!!!")
     }
    
 
 
 
 }
 
 ));












module.exports=router;

