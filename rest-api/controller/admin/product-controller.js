
var ProductEntity=require('../../model/product-entity')

 module.exports.findProducts=(req,res)=> {
   console.log("@@@@@@@@@@@product@@@@@@@@@@@@@@");
   ProductEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });

}

module.exports.postProducts =(req,res)=>{
   var product = req.body;
   var productEntity = new ProductEntity();

   for (key in product){
      productEntity[key] = product[key];
   }

   productEntity.save(err =>{
      if(err){
         return res.status(200).json({status:"fail",message:"couldn't save to database"});
      }else{
         return res.status(200).json({status:"success",message:"product sucessfully saved"})
      }
   })

}

module.exports.getProduct = (req,res)=>{
   var pid = req.params.pid;
   ProductEntity.find({pid:pid}, (err,data)=>{
      if(err){
         return res.status(404).send({
            status:"fail",
            message: "Product not found with pid " + pid
        });
      }

      return res.status(200).json(data);
   });
}