const express=require('express');
const auth=require('../middleware/auth.js');
const adminController=require("../controllers/adminController.js")
const router=new express.Router()

router.get('/',adminController.home);


module.exports=router