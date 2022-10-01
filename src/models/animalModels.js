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

animalSchema.virtual("animalmessages",{
    ref:"animalmessage",
    localField:"_id",
    foreignField:"animalId"
});

const Animal=mongoose.model("animal",animalSchema);
module.exports=Animal;
