const express=require("express");
const mysql=require("mysql");
const app=express()

app.use(()=>{
    console.log("ding fries are done");
})

app.listen(3000,()=>{
    console.log("listening on port 3000")
})

app.listen(3306,()=>{
console.log("we did it!")
})



