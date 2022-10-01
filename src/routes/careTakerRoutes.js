const express=require('express')
const auth=require('../middleware/auth.js')
const careTakerController=require("../controller/careTakerController.js")
const animalController=require("../controller/animalController.js")
const router=new express.Router()

router.get("/",careTakerController.home);

router.post("/createAnimals",auth,animalController.create);
router.post("/getAnimal",auth,animalController.get);

module.exports=router