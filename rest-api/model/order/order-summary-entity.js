/**
 *  This fill will make a
 *  connection to the database
 *  This file is known as module
 */
//creating mongoose to define schema
//This mongoose is ORM for 
var mongoose = require('mongoose');
var OrderSummarySchema  = new mongoose.Schema({
    orderId: { type: String,required: true, unique: true },
    orderDetailsId: { type: String},
    sid: { type: String},
    bid: {type: String}, //shipping id from shipping_collection
    delivaryNotes: { type: String},
    delivaryTime: { type: String},
    delivaryDay: { type: Date},
    tax: {type: Number},
    total: {type: Number},
    doe: {type: Date},
    dom: {type: Date}
    },{collection: 'order_summary_colletions'});

    //on every save, add the date
   OrderSummarySchema.pre('save', function(next) {
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
var OrderSummaryEntity=mongoose.model('OrderSummary', OrderSummarySchema);
//exporting object ProfileEntity
module.exports=OrderSummaryEntity;
