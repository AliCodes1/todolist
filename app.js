const express=require("express");
const bodyParser=require("body-parser");
const date = require(__dirname + "/date.js");

const app=express();
let items=[];
let workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
app.get("/work",(req,res)=>{
    res.render("index",{Title:"Work",items:workItems});
})

app.get("/about",(req,res)=>{
    res.render("about");
})
app.get("/",function(req,res){
    let day=date.date();
    res.render("index",{Title:day,items:items});
});

app.post("/",(req,res)=>{
    let item=req.body.info;
    if(req.body.list=="Work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
    
})
app.post("/work",(req,res)=>{
    let workItem=req.body.info;
    workItems.push(workItem);
    res.redirect("/work");
})

app.listen(3000,function(req,res){
    console.log("Server running");
});