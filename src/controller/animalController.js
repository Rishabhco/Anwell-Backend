const Animal=require("../models/animalModels");

const create=async(req,res)=>{
    try{
        const animal=new Animal(req.body);
        await animal.save();
        res.status(200).send({
            message:"Animal created successfully",
            animal
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
        const animal=await Animal.find({careTakerId:req.body.id});
        res.status(200).send({
            message:"All Animals",
            animal
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