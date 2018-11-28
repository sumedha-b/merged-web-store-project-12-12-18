fs = require('fs');
var VendorEntity=require('../../model/vendor-entity')
var ImageFolderPath=require('../../config/image-folder-path')


module.exports.findProfilePic=(req,res)=> {
    //var _id=req.query.id;
    var pvcode=req.params.vcode;
    console.log("vcode = "+pvcode);
    if(pvcode==undefined){
        return;
    }
    VendorEntity.find({vcode:pvcode},function(err,data){
      console.log(err)
      if (err) 
      throw err;
       if(data.length==1){
         var imagePath=data[0].photo;
         var cimagePath=appRoot +"/"+imagePath;
         fs.readFile(cimagePath, function(err, data) {
            console.log(err)
            if (err) throw err; // Fail if the file can't be read.
              res.writeHead(200, {'Content-Type': 'image/jpeg'});
              res.end(data); // Send the file data to the browser.
          });
       }else{
         res.end([]);
       }
   });
    //Reading image from file system
   
  }

 module.exports.findVendors=(req,res)=> {
   console.log("@@@@@@@@@@@findVendors@@@@@@@@@@@@@@");
   VendorEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });

}

module.exports.saveVendor =(req,res)=>{
   console.log("___________________");
   //console.log(req);
   var vendor = req.body;
   console.log(vendor);
   //reading the image coming from client as a request
   let pphoto = req.files.photo;
   console.log("Printing the image!!!!!!!!!!!!!");
   console.log(pphoto.name); // name of the image
  // console.log(pphoto.data); //image as a byte array
  
   
   var vendorEntity = new VendorEntity();
   for (key in vendor) {
      vendorEntity[key] = vendor[key]; // copies each property to the vendorEntity object
   }
   vendorEntity.userid=vendor.userid;
   //saving image location into the database!
   var imgext=pphoto.name.substring(pphoto.name.length-4);
   var pphotoName=vendor.vcode+"_profile"+imgext;
   console.log(pphotoName);
   //this is just image path which we will save into the database
   vendorEntity.photo=ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName;
//----------------------------------------------------------------------------------------------------//
//saving file on server file system
pphoto.mv(appRoot +"/"+ImageFolderPath.VENDOR_PROFILES+"/"+pphotoName, function(err) {
        if(err){
         console.log(err);  
         res.status(500).json({status:"fail",message:"Sorry!! vendor profile image is not save"}); 
        }else{
         vendorEntity.save(err =>{
            if(err){
               console.log(err);
               return res.status(200).json({status:"fail",message:"couldn't save to database"});
            }else{
               return res.status(200).json({status:"success",message:"vendor sucessfully saved"})
            }
         }); //end of save entity
      }
        
}); //end of mv method

}
