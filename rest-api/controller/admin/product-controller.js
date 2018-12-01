fs = require('fs')
var ProductEntity=require('../../model/product-entity')
var ImageFolderPath = require('../../config/image-folder-path')

 module.exports.findProducts=(req,res)=> {
   console.log("@@@@@@@@@@@product@@@@@@@@@@@@@@");
   ProductEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });

}

module.exports.getImage = (req,res) =>{
   console.log('its routing');
   var url = req.params.imageUrl;
   var imagePath = appRoot  + "/" +  ImageFolderPath.PRODUCTS_IMAGES +"/" + url;
   fs.readFile(imagePath,(err,data)=>{
      
      if (err){
         console.log(err)
         return res.status(500).json({status:"fail",message:"Sorry!! image not found"});
      }
      res.writeHead(200,{'Content-Type':'image/jpeg'});
      res.end(data);
   });
}

module.exports.postProducts =(req,res)=>{
   var product = req.body;
   var productEntity = new ProductEntity();

   let pphoto = req.files.photo;
   for (key in product){
      productEntity[key] = product[key];
   }

   var imgext = pphoto.name.substring(pphoto.name.length-4);
   var pphototName = product.pid+"product"+imgext;
   
   productEntity.imageUrl = pphototName;
   console.log(appRoot + "/" + productEntity.imageUrl);
   pphoto.mv(appRoot + "/" + ImageFolderPath.PRODUCTS_IMAGES + "/" +productEntity.imageUrl, function(err){
      if(err){
         console.log(err);  
         return res.status(500).json({status:"fail",message:"Sorry!! product profile image is not save"});
      }else{
         productEntity.save(err =>{
               if(err){
                  console.log(err);
                  return res.status(200).json({status:"fail",message:"couldn't save to database"});
               }else{
                  return res.status(200).json({status:"success",message:"product sucessfully saved"})
               }
            });
      }
   });
   

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