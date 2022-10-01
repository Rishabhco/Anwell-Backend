const CareTaker=require("../models/careTakerModels");

const home=(req,res)=>{
    try{
        res.status(200).send({
            message:"Welcome to ANWELL API"
        });
    }catch(error){
        res.status(400).send({
            message:"Something went wrong",
            error
        });
    }
}

const createCareTaker=async(req,res)=>{
    try{
        const careTaker=new CareTaker(req.body);
        await careTaker.save();
        res.status(200).send({
            message:"CareTaker created successfully",
            careTaker
        });
    }
    catch(error){
        res.status(400).send({
            message:"Something went wrong",
            error
        });
    }
}

const getAllCareTaker=async(req,res)=>{
    try{
        const careTakers=await CareTaker.find({});
        res.status(200).send({
            message:"All CareTakers",
            careTakers
        });
    }
    catch(error){
        res.status(400).send({
            message:"Something went wrong",
            error
        });
    }
}

module.exports={
    home,createCareTaker,getAllCareTaker
}