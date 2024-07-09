const express = require("express");
const mongoose = require('mongoose');


const app = express();

const userRoute = require('./routes/user');


app.use('/user', userRoute);

mongoose.connect('mongodb+srv://ecom:ecomdb@cluster0.k0c40pl.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log("connected");
    // console.log(res);
    app.listen(4000);
}).catch((err)=>{
    console.log(err);
})