import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { Slider } from 'src/app/model/slider';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  public imageUrl:string="";
  public slider:Slider;

  constructor(private sliderService:SliderService, private dataService:DataService) {}
 
  ngOnInit() {
    // this.sliderService.findSlider().subscribe(data=>{
    //     this.slider = data[0];
    //     var doodoo:string = '../../../'+this.slider.image;  
    //     this.imageUrl = doodoo;
    //     console.log(this.slider.image);
    //     console.log(this.imageUrl);
    //     console.log(doodoo);
    // });

    this.dataService.currentMessage.subscribe(info => {
        if(info == null) {
         this.sliderService.findSlider().subscribe(data=>{
           this.slider = data[0];
           console.log("Here is your slider baba:");
           console.log(this.slider);
           var doodoo:string = '../../../'+this.slider.image;  
         this.imageUrl = doodoo;
         console.log(this.slider.image);
         console.log(this.imageUrl);
         console.log(doodoo);
         });   
       }else {
        this.slider = info;
        console.log("Here is your slider chacha:");
        console.log(this.slider);
        var doodoo:string = '../../../'+this.slider.image;  
      this.imageUrl = doodoo;
      console.log(this.slider.image);
      console.log(this.imageUrl);
      console.log(doodoo);
       }

    });
  }
}
