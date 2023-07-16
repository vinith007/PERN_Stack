require("dotenv").config(); 
const express = require('express')

const app = express()

app.use((req,res,next)=>{
console.log("1st middleware");
next()
})
//get all restaurants
app.get("/api/v1/getRestarunts", (req,res)=>{
    res.status(200).json({
        status : "successful",
        data:{
            restaurant: ['mcd','foodpanda']
        }
            
        
        
    });
})
 //get single restaurant
app.get("/api/v1/getRestarunts/:id",(req,res)=>{
    console.log(req);
})

//create resrtaurants
app.post("/api/v1/getRestarunts/:id",(req,res)=>{
    console.log(req)
})

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`app is listening to port ${port}`)
})