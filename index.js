
const express=require('express');
const mongoose=require('mongoose');

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost/yavarpoua')
    .then(()=>console.log('Connected to MongoDb...'))
    .catch(err=>console.error('Could not connect to Mongodb...',err))

app.get('/',(req,res)=>{
    res.send("Hello There This Website of Yavarpoua-e-jnoob.");
});

app.listen(port,console.log(`Now I listen to port${port}`));


