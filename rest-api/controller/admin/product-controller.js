fs = require('fs')
var ProductEntity=require('../../model/product-entity')
var ImageFolderPath = require('../../config/image-folder-path')


module.exports.findProductsByIds=(req,res)=> {
   var productIds = req.body.pids;

   console.log("Find Products By Ids:");
   console.log(productIds);

   var arrayPIDs = productIds.split(',');

   console.log("arrayPIDs");
   console.log(arrayPIDs);

   /*
         $in: [   
          '5bff6a1f56ffe310f8240b2a',
          '5bfc5d405f32c61bf86070e1'   
         ]          
   */

   ProductEntity.find({
      '_id': { 
         
         $in: arrayPIDs
         
      }
   }, function(err, data){
      if(err){
         res.status(200).json("Failure: " + err);
      }
      console.log(data);
      res.status(200).json(data);
   });
}

 module.exports.findProducts=(req,res)=> {
   console.log("@@@@@@@@@@@product@@@@@@@@@@@@@@");
   ProductEntity.find({},function(err,data){
          if(err){
             //handler the error
          }else{
            console.log(data);
            res.status(200).json(data);
          }
          
   });

}

module.exports.getImage = (req,res) =>{
   console.log('its routing');
   var url = req.query.imageUrl;
   console.log("_@)@)@)@)@hey!  = "+url);
   var imagePath = appRoot  + "/" +  ImageFolderPath.BASE_IMAGE_DB_PATH +"/" + url;
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


//----------------------------------Product Review code----------------------------------------
//---------------------------------------------------------------------------------------------
var ReviewEntity = require('../../model/review-entity');

module.exports.getProductReviews = (req,res)=>{
   var pid = req.params.pid;
   ReviewEntity.find({pid:pid}, (err,data)=>{
      if(err){
         return res.status(404).send({
            status:"fail",
            message: "Product not found with pid " + pid
        });
      }
      return res.status(200).json(data);
   });
}

module.exports.postProductReview = (req,res)=>{
   var review = req.body;
   var reviewEntity = new ReviewEntity();

   for (key in review){
      reviewEntity[key] = review[key];
   }

   reviewEntity.save(err =>{
      if(err){
         console.log(err);
                  return res.status(200).json({status:"fail",message:"couldn't save to database"});
      }else{
         return res.status(200).json({status:"success",message:"reivew sucessfully saved"});
      }
   });

}  
module.exports.getProductRating = (req,res)=>{
      var pid = req.params.pid;
      ReviewEntity.find({pid:pid}, 'rating' ,(err,data)=>{
         var rating = 0;
         if(data.length>0){
            for(var i = 0; i< data.length;i++){
               rating = rating + data[i].rating;
            }
            rating = rating /data.length;
         }

         console.log(rating);
         if(err){
            return res.status(404).send({
               status:"fail",
               message: "Product not found with pid " + pid
           });
         }
         return res.status(200).json(rating);
      });
   }