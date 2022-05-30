const express = require('express');
const app =express();

app.get('/', (req,res)=>{
    res.send("Hi Collins, You are writing your first backend code");
})

app.listen(3001, ()=> console.log("port 3001 active"))
