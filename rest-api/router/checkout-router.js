<<<<<<< HEAD
var CheckoutController = require('../controller/checkout/checkout-controller')
=======
var CheckoutController = require('../controller/checkout/checkout-controller');
>>>>>>> 148921c5e67da5e4875dce49ae79fdc4a6ef2590
module.exports=function(endpoint) {
    endpoint.post("/checkout", CheckoutController.checkout);
}

