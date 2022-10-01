const CareTakerAction=require("../models/careTakerActions");

const create=async(req,res)=>{
    try{
        const careTakerAction=new CareTakerAction(req.body);
        await careTakerAction.save();
        res.status(200).send({
            message:"CareTakerAction created successfully",
            careTakerAction
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
        const action=await CareTakerAction.find({careTakerId:req.body.id});
        res.status(200).send({
            message:"All Messages",
            action
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