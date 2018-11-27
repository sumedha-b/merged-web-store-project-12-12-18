import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  @Input("pitem")
  vendorDetails:Vendor;

  constructor() { }

  ngOnInit() {
  }

}
