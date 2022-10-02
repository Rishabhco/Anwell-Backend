const express=require('express')
const auth=require('../middleware/auth.js')
const careTakerController=require("../controller/careTakerController.js")
const animalController=require("../controller/animalController.js")
const animalMessagesController=require("../controller/animalMessagesController.js")
const careTakerActionController=require("../controller/careTakerActionController.js")
const router=new express.Router()

router.get("/",careTakerController.home);

router.post("/createAnimals",auth,animalController.create);
router.post("/getAnimal",auth,animalController.get);
router.post("/getAnimalById",auth,animalController.getById);

router.post("/getMessages",auth,careTakerActionController.get);
router.post("/createMessage",auth,animalMessagesController.create);
router.post("/getAnimalMessages",auth,animalMessagesController.get);

module.exports=router