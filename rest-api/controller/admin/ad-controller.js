var AdEntity=require('../../model/advertisement-entity');
var ImagePath=require('../../config/image-folder-path');

module.exports.saveAd=(req, res) => {
    console.log();
    console.log("printing the Ad: ")
    var ad=req.body;
    console.log(ad);

    console.log();
    let adPhoto=req.files.photo;
    console.log("Printing the image!!!!!!!!!!!!!");
    console.log(adPhoto);

    console.log();

    var adEntity=new AdEntity;
    for (key in ad) {
        adEntity[key] = ad[key];
    }

    //retrieving the image type (png, jpg, etc)
    var imageType=adPhoto.name.substring(adPhoto.name.length-4);
    //creating the image name to be saved to the database
    photoName=ad.adId+"_advertisement"+imageType;
    //creating the full path that will be saved in the database
    adEntity.photo=ImagePath.AD_IMAGES+"/"+photoName;

    //saving the ad and photo:
    adPhoto.mv(appRoot+"/src/"+ImagePath.AD_IMAGES+"/"+photoName, function(err){
        if (err) {
            console.log("ERROR HAS OCCURED WHILE SAVING THE AD IMAGE TO THE DATABASE");
            console.log(err);
        } 
        else {
            adEntity.save(err=>{
                if (err) {
                    res.status(200).message("error occured while saving the ad to the database.")
                } else {
                    res.status(200).message("ad successfully saved!");
                }
            })
        }
    });
}

module.exports.findById=(req, res) => {
    var adverId=req.query.adId;
    console.log("AD ID: "+adverId);

    AdEntity.find({ adId:adverId }, function(err, data){
        if (err){ 
            console.log(err);
        } else {
            res.status(200).json(data[0]);
        }
    });
}