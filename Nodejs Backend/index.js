const express = require('express');
const app =express();
app.use(express.json);
const courses =[
    {id: 1, name:"course1"},
    {id: 2,name:"course2"},
];

app.get('/', (req,res)=>{
    res.send("Hi Collins, You are writing your first backend code");
})

app.post('/api/courses', (req,res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name 
    }
    courses.push(course);
    res.send(course); 
})
//set the port of the app
const port =process.env.PORT || 3000
app.listen(port, ()=> console.log(port, "port  active"));
