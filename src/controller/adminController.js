const News=require("../models/newsModels");


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

const createNews=async(req,res)=>{
    try{
        const news=new News(req.body);
        await news.save();
        res.status(200).send({
            message:"News created successfully",
            news
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
    home,createNews
}