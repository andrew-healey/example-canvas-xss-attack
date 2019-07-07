const express=require("express");
const app=express();
app.get("/",(req,res)=>{
  console.log(req.query.d);
  res.send();
});
app.listen(process.env.PORT||3000,()=>console.log("server started"));
