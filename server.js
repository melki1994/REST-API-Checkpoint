const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config({path:'config/.env'})
const app= express();
const connectDB = require ("./config/connectDB");
const PORT = process.env.PORT;
app.use(express.json());
connectDB();
const User = require("./models/User");

//CREATE = POST : ADD A NEW USER TO THE DATABASE
// app.post('/createNewUser',(req,res)=>{
//   User.create(req.body)
//   .then((res)=>res.json({msg:'user created'}))
//   .catch((err)=>res.json(err))
// });


//READ = GET : RETURN ALL USERS
//  app.get('/getAllUsers',(req,res)=>{
//     User.find({})
//     .then((users)=>res.json(users))
//     .catch((err)=>res.json(err))
// });   


//UPDATE = PUT : EDIT A USER BY ID
// app.put('/updateUser',(req,res)=>{
//   User.findByIdAndUpdate(req.body.userId, req.body.newUser)
//   .then((res)=>res.json({msg:'user updated'}))
//   .catch((err)=>res.json(err))
// });


//DELETE = DELETE : REMOVE A USER BY ID
// app.delete('/deleteUser',(req,res)=>{
//   User.findByIdAndDelete(req.body.userId)
//   .then((res)=>res.json({msg:'deleted'}))
//   .catch((err)=>res.json(err))
// });


app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${PORT}`);
});