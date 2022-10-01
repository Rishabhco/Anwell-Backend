const AnimalMessages=require("../models/animalMessages.js");

const create=(req,res)=>{
    try{
        const animalMessages=new AnimalMessages(req.body);
        animalMessages.save();
        res.status(200).send({
            message:"AnimalMessages created successfully",
            animalMessages
        });
    }
    catch(error){
        res.status(400).send({
            message:"Something went wrong",
            error
        });
    }
}

const get=async(req,res)=>{
    try{
        const messages=await AnimalMessages.find({animalId:req.body.id});
        res.status(200).send({
            message:"All Messages",
            messages
        });
    }catch(error){
        res.status(400).send({
            message:"Something went wrong",
            error
        });
    }
}

module.exports={
    create,get
}