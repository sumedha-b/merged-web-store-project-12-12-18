var SliderEntity = require('../../model/slider-entity');
var IMAGE_FOLDER_PATH = require('../../config/image-folder-path');

module.exports.saveSlider = (req,res) => {
    var slider = req.body; //this is the json object coming from the client. 
    console.log("##########Inside saveSlider()");
    console.log(slider);

    let img = req.files.image;
    console.log('Below is the img');
    console.log(img);
    console.log("Printing image name");
    console.log(img.name);

    var sliderEntity = new SliderEntity();
    for(key in slider){
        sliderEntity[key] = slider[key];  //Each key from json object is initializing sliderEntity.
    }

    //var imgExt = img.name.substr(img.name.length-4);
    var imgName = img.name;
    sliderEntity.image = "assets/slider/"+imgName;

    img.mv(appRoot+"/"+IMAGE_FOLDER_PATH.SLIDER_IMAGES+"/"+imgName, function(err) {
        if(err) {
            console.log(err);
            return res.status(500).json({status:"fail",message:"Sorry! Could Not Save Slider Image."});
        }else {
            sliderEntity.save(err => {
                if(err) {
                    console.log(err);
                    return res.status(200).json({status:"fail",message:"couldn't save to database"});
                
                }else {
                    return res.status(200).json({status:"success",message:"vendor sucessfully saved"});
                }
            });
        }
    });
}; 


module.exports.findSlider = (req,res) => {
    console.log("OOOOOOOGGGGGGGGGGG ** We are inside findSlider");
    SliderEntity.find({}).sort('-doe').exec(function(err, data) {
        console.log(data);
          res.status(200).json(data);
    }) ;
}