import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  public vendor:Vendor=new Vendor();
  public message:String=""; 
  constructor(private vendorService:VendorService) { }

  ngOnInit() {
  }

  public addVendor(){
    console.log(this.vendor);
     this.vendorService.addVendor(this.vendor).subscribe(data =>{
        console.log(data);
        this.message="Vendor is uploaded!";
     });
  }

}
