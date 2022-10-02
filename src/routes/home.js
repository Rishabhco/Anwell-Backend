const express=require('express')
const userController=require('../controller/userController.js')
const adminController=require('../controller/adminController.js')
const auth=require('../middleware/auth.js')
const router=new express.Router()

router.get('/',userController.home);
router.post("/signup",userController.createUser);
router.post("/login",userController.login);
router.post('/logout',auth,userController.logout);
router.get("/getNews",adminController.getNews);

module.exports=router