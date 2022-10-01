const mongoose = require("mongoose");

const careTakerSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: 6,
        validate(value) {
            if (!validator.isAlphanumeric(value)) {
                throw new Error("Enter a valid username");
            }
        },
    },
    contact: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
    },
    noOfAnimals:{
        type:Number,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    specialist:{
        type:String,
        required:true,
        trim:true,
    }
});

const CareTaker = mongoose.model("caretaker", careTakerSchema);
module.exports = CareTaker;