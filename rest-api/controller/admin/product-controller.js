
var ProductEntity=require('../../model/product-entity')

 module.exports.findProducts=(req,res)=> {
   console.log("@@@@@@@@@@@students@@@@@@@@@@@@@@");
   ProductEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });

}

module.exports.postProducts =(req,res)=>{
   var product = req.body;
   var productEntity = new ProductEntity();
//-----------------------------------------------------------------------------------------------------//
   productEntity.pid = product.pid;
   productEntity.sku = product.sku;
   productEntity.title = product.title;
   productEntity.category = product.category;
   productEntity.brands = product.brand;
   productEntity.color = product.color;
   productEntity.size = product.size;
   productEntity.weight = product.weight;
//----------------------------------------------------------------------------------------------------//
   productEntity.price = product.price;
   productEntity.sprice = product.sellPrice;
   productEntity.stock = product.stock;
   productEntity.overview = product.overview;
   productEntity.techSpecs = product.technicalSpecs;
   productEntity.description = product.description;
   productEntity.rewardPoints = product.rewardPoints;
   productEntity.imageUrl = product.imageUrl;
//----------------------------------------------------------------------------------------------------//
   productEntity.save(err =>{
      if(err){
         return res.status(200).json({status:"fail",message:"couldn't save to database"});
      }else{
         return res.status(200).json({status:"success",message:"product sucessfully saved"})
      }
   })

}