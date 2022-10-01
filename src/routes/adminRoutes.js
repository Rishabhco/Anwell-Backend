const express=require('express');
const auth=require('../middleware/auth.js');
const adminController=require("../controller/adminController.js")
const careTakerController=require("../controller/careTakerController.js")
const router=new express.Router()

router.get('/',adminController.home);
router.post("/news",auth,adminController.createNews);

router.post("/createCareTaker",auth,careTakerController.createCareTaker);
router.get("/getAllCareTakers",auth,careTakerController.getAllCareTaker);

module.exports=router