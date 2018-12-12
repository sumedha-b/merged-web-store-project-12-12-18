var CheckoutController = require('./checkout-controller')
module.exports=function(endpoint) {
    endpoint.post("/admin/checkout", CheckoutController.checkout);
}

