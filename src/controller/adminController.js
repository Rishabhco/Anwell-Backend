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

module.exports={
    home
}