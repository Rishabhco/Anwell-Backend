const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
    },
    date:{
        type:String,
        required:true,
        trim:true,
    }
});


const News = mongoose.model("news", newsSchema);
module.exports = News;