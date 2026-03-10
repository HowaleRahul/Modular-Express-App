const express =require('express');
const app=express();
//middleware imports
const middleware=require('./middleware/indexMiddleware');

//middleware
app.use(middleware);

// //routes import
// const indexRoute=require('./routes/indexRoute');
const loginRoute=require('./routes/loginRoute');

//routes
// app.use("/",indexRoute);
app.use("/login",loginRoute);
app.get('/',(req,res)=>{
    res.send("hello from about");
})

module.exports=app;


