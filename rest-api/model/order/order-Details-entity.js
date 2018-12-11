/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var OrderDetailSchema  = new mongoose.Schema({
    id: { type: String,required: true, unique: true },
    ProductId: { type: String},
    Quantity: { type: Number}, //shipping id from shipping_collection
    OrderID: { type: String},
    doe: {type: Date},
    dom: {type: Date}
    },{collection: 'order_detail_colletions'});

        //on every save, add the date
   OrderDetailSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();
    // change the updated_at field to current date
    this.dom = currentDate;
    // if created_at doesn't exist, add to that field
    if (!this.doe){
      this.doe = currentDate;
    } 
    next(); //means go ahead and save it into db now
});

//Here we are registering OrderDetailEntity as model in mongoose
var OrderDetailEntity=mongoose.model('OrderDetail', OrderDetailSchema);
//exporting object ProfileEntity
module.exports=OrderDetailEntity;
