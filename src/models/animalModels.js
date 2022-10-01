const mongoose=require("mongoose");

const animalSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    pastMedicalHistory:{
        type:String,
        required:true,
        trim:true,
    },
    weight:{
        type:String,
        required:true,
        trim:true,
    },
    pastSurgeries:{
        type:Number,
    },
    careTakerId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'caretaker'
    }
});

const Animal=mongoose.model("animal",animalSchema);
module.exports=Animal;
