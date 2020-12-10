const express=require('express')
const mongoose=require('mongoose')
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const path=require("path")
app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb://Localhost:27017/examdb",{useNewUrlParser:true})
app.use(cors())
mongoose.connection.on('connected',function(){
    console.log("connected to database");
})
mongoose.connection.on('error',function(err){
    console.log(err);
})
//schema database
const schema_name=new mongoose.Schema({
    username:String,
     timeused:Number,
     dateused:Date,
     mood:String
    
  })
  const model_name=mongoose.model("database_name",schema_name)
//to find record from db
//model_name.find({fieldname:req.body.value},function(err,result){})
/*
*/
app.get('/',function(req,res){
model_name.find({},function(err,result){
    console.log(result)
    res.json(result);
    
})
    
})
app.post('/',function(req,res){
    console.log(req.body)
  const variable=new model_name(
    {
    username:req.body.username,
     timeused:req.body.timeused,
     dateused:req.body.dateused,
     mood:req.body.mood
    })
     variable.save();
     res.status(200).send({message:"data received"});
})



port=3000
app.listen(port,function(){
    console.log("server running")
})