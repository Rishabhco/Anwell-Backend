const express=require('express');
var bodyParser = require('body-parser');
const cors=require("cors");
const db=require("./db/db.js");
const homeRouter=require('./routes/home.js');
const adminRouter=require('./routes/adminRoutes.js');
const careTakerRouter=require('./routes/careTakerRoutes.js');

const app=express()
const port=process.env.PORT

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
 
 app.use(bodyParser.urlencoded({ extended: false }))
 
 // parse application/json
 app.use(bodyParser.json())
 
 app.use(express.urlencoded({ extended: true }))
 

app.use(cors(corsOptions))
app.use(express.json())
app.use("/home",homeRouter);
app.use("/admin",adminRouter);
app.use("/caretaker",careTakerRouter);

app.listen(port,()=>{
    console.log('Server is up on the port '+port+" !")
})