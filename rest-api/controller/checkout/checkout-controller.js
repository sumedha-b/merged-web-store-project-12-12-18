module.exports.checkout=(req, res) => {
    console.log(req.body);
    console.log(req.body.orderDetails.items);
    return res.status(200).json({status:"success", message: "order has been successfully saved into the database."});
 }