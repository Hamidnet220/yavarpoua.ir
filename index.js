
const express=require('express');
const mongoose=require('mongoose');

const app=express();
const port=3000;

mongoose.connect('mongodb://localhost/yavarpoua')
    .then(()=>console.log('Connected to MongoDb...'))
    .catch(err=>console.error('Could not connect to Mongodb...',err));

const employeeSchema=new mongoose.Schema({
    year:string,
    month:string,
    name:string,
    lastname:string,
    fatherNamew:string,
    nationalCode:string,
    groseWage:number,
    netPay:number
});

const Employee=mongoose.model('Employee',employeeSchema);

async function createEmployee(){
    const employee=new Employee({
        year:'1397',
        month:'08',
        name:'شاکر',
        lastname:'آبرفت',
        fatherNamew:'حسن',
        nationalCode:'175125276',
        groseWage:25000000,
        netPay:21000000
    });
    
    const result=await employee.save();
    console.log(result);
}



app.get('/',(req,res)=>{
    res.send("Hello There This Website of Yavarpoua-e-jnoob.");
});

app.listen(port,console.log(`Now I listen to port${port}`));


