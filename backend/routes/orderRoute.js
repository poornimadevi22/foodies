const express=require("express");
const router= express.Router();
const orderSchema=require('../models/order')



router.get("/getOrders", (async (req,res,next)=>{
        
     try { 
         const orders=await  orderSchema.find({});
         res.status(200).json({
             success:"true",
             data:orders
         })
     } catch (error) {
         console.error("something went wrong!!!",error)
     }
    
 
 
 
 }
 
 ));

router.put("/create", (async (req,res,next)=>{
    const items=req.body;
     if(!items){
         return res.status(500).json({
            success:"false",
            message:"Please reorder"
         })
        
     }try { 
         await  orderSchema.create(items);
         res.status(200).json({
             success:"true",
             message:"Order created successfully!!"
         })
     } catch (error) {
         console.error("something went wrong!!!",error)
     }
    
 
 
 
 }
 
 ));



module.exports=router;

