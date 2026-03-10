const router=require('express');
const app=router();

const indexController=require('../controller/indexController');


app.get('/',(req,res)=>{
    res.send("hello from express server index route");
    indexController();
})




module.exports=app;