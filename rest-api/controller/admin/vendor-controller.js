
var VendorEntity=require('../../model/vendor-entity')

 module.exports.findVendors=(req,res)=> {
   console.log("@@@@@@@@@@@findVendors@@@@@@@@@@@@@@");
   VendorEntity.find({},function(err,data){
          console.log(data);
          res.status(200).json(data);
   });

}

module.exports.saveVendor =(req,res)=>{
   var vendor = req.body;
   var vendorEntity = new VendorEntity();
   for (key in vendor) {
      vendorEntity[key] = vendor[key]; // copies each property to the vendorEntity object
   }
   vendorEntity.userid=vendor.userid;
//----------------------------------------------------------------------------------------------------//
vendorEntity.save(err =>{
      if(err){
         return res.status(200).json({status:"fail",message:"couldn't save to database"});
      }else{
         return res.status(200).json({status:"success",message:"vendor sucessfully saved"})
      }
   })

}