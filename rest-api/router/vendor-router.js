
var VendorController=require('../controller/admin/vendor-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)
    endPoint.get("/admin/vendors",VendorController.findVendors);
    endPoint.post("/admin/vendors",VendorController.saveVendor);
    
};
