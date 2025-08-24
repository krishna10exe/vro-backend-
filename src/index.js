import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js"; // ✅ This is the fix

dotenv.config({ //another way require('dotenv').config({path:'./env'});
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is listening at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed !!!",error)
})




/*  // approach 1 to connect to db
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
( async () => {
    try{
        const connection= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: " ,error)
            throw error;
        })
        app.listen(process.env.PORT,()=>{
            console.log("app is listening o n port : ",process.env.PORT)
        })
    }
    catch(error){   
        console.error("error:",error)
        throw error;
    }
}) () */