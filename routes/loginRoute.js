const router=require('express');
const app=router();

const indexController=require('../controller/indexController');




app.get('/',(req,res)=>{
    res.send("hello from login");
    indexController();
})



module.exports=app;