const mongoose=require("mongoose");

const animalMessagesSchema=new mongoose.Schema({
    feedback:{
        type:String,
        required:true,
        trim:true,
    },
    date:{
        type:String,
        required:true,
        trim:true,
    },
    animalId:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'animal'
    },
});

const AnimalMessages=mongoose.model("animalmessage",animalMessagesSchema);
module.exports=AnimalMessages;