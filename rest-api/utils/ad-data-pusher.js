var AdEntity=require('../model/advertisement-entity')
/*
adId: { type: String,required: true, unique: true },
title: { type: String},
orgPrice: { type: String},
discountPrice: { type: String},
endDate: { type: Date},
startDate: { type: Date },
description: { type: String},
imageUrl: { type: String },
subtitle: {type: String},
productId: {type: String},
*/
module.exports=function(){
    var ad1 =new AdEntity();
    ad1.adId="A123";
    ad1.title="JBL Speakers";
    ad1.orgPrice="0";
    ad1.discountPrice="0";
    ad1.endDate=new Date(2020, 0, 0, 0, 0, 0, 0);
    ad1.description="Stock up on limited edition speakers on our awesome mid-season sale.";
    ad1.imageUrl="assets/img/advertisement/jbp-speaker.png";
    ad1.subtitle="get 50% offer";
    ad1.productId="none";
    ad1.save(function(err){
        if(!err)
        console.log("Advertisement 123 has been created!");
        else
        console.log("Ad 123 is already there!");
    });

    var ad2 =new AdEntity();
    ad2.adId="A200";
    ad2.title="Game Console Controller + USB 3.0 Cable";
    ad2.orgPrice="$400";
    ad2.discountPrice="$520";
    ad2.endDate=new Date(2018, 12, 10);
    ad2.description="";
    ad2.imageUrl="assets/img/advertisement/01.jpg";
    ad2.subtitle="Hurry Up! Offer ends in:";
    ad2.productId="none";
    ad2.save(function(err){
        if(!err)
        console.log("Advertisement 200 has been created!");
        else
        console.log("Ad 200 is already there!");
    });

    var ad2 =new AdEntity();
    ad2.adId="A250";
    ad2.title="";
    ad2.orgPrice="";
    ad2.discountPrice="";
    ad2.endDate=new Date(2020,0,0);
    ad2.description="";
    ad2.imageUrl="assets/img/advertisement/06.jpg";
    ad2.subtitle="";
    ad2.productId="none";
    ad2.save(function(err){
        if(!err)
        console.log("Advertisement 250 has been created!");
        else
        console.log("Ad 250 is already there!");
    });
};