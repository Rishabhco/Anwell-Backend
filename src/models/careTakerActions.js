const mongoose=require("mongoose");

const careTakerActionSchema=new mongoose.Schema({
    message:{
        type:String,
        required:true,
        trim:true,
    },
    careTakerId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'caretaker'
    },
});

const CareTakerAction=mongoose.model("caretakeraction",careTakerActionSchema);
module.exports=CareTakerAction;