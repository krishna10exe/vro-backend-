// require('dotenv').config({path:'./env'});
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import express from "express"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
const app=express()

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is listening at port: ${process.env.PORT}`)
    })
})
.catch(()=>{
    console.log("MONGODB connection failed !!!",error)
})




/*  // approach 1 to connect to db
( async () => {
    try{
        const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: " ,error)
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log("app is listening on port : ",process.env.PORT)
        })
    }
    catch(error){   
        console.error("error:",error)
        throw error;
    }
}) () */