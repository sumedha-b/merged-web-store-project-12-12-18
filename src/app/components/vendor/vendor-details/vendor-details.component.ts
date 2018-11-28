import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { AppConfig } from '../../../config/app.config';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  public baseURI:String="";

  @Input("pitem")
  vendorDetails:Vendor;

  constructor() {

   }

  //this is a callback method define inside OnInit interface 
  ngOnInit() {
    //why I am writting this code inside ngOnInit , why not inside constructor
     this.baseURI=AppConfig.BASE_ENDPOINT;
  }

}
