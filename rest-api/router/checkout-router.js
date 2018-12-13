var CheckoutController = require('../controller/checkout/checkout-controller')
module.exports=function(endpoint) {
    endpoint.post("/checkout", CheckoutController.checkout);
}

