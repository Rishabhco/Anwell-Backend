const express=require('express')
const auth=require('../middleware/auth.js')
const careTakerController=require("../controllers/careTakerController.js")
const router=new express.Router()

router.get("/",careTakerController.home);

module.exports=router