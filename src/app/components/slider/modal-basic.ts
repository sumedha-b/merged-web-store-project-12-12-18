import { Component } from '@angular/core';
import { Slider } from '../../model/slider';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SliderService } from 'src/app/services/slider.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {

  public message:String="";
  private slider:Slider = new Slider(); 
  public selectedFile:File;
  public uploadFile:File;
  public imageShow;

  closeResult: string;

  constructor(private modalService: NgbModal, private sliderService:SliderService) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${reason}`;
    });
  }

  public onFileChanged(event): void {
    console.log("inside onFileChanged()");
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];


    //Trying the image preview code!
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event) => {
      this.imageShow = (<FileReader>event.target).result;
    };
  }

  public addSlider():void{
    console.log("1. We are calling the addSlider() and below is the slider object!");
    console.log(this.slider);
    console.log(this.selectedFile);
    this.sliderService.addSlider(this.slider,this.selectedFile).subscribe(data=>{
      console.log(data);

      this.message = "Information Saved!";

      this.slider = new Slider();
      this.selectedFile = null;
    });

  }

}
