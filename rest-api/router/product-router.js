
var ProductController=require('../controller/admin/product-controller')
module.exports=function(endPoint){

    //Mapping for add profile
    //@RequestMapping(value="profiles",method=RequestMethod.POST)
    endPoint.get("/admin/products",ProductController.findProducts);
    endPoint.post("/admin/products",ProductController.postProducts);
    
};
