import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';
import { resolve } from 'url';

@Component({
  selector: 'app-second-advertisement',
  templateUrl: './second-advertisement.component.html',
  styleUrls: ['./second-advertisement.component.css']
})
export class SecondAdvertisementComponent implements OnInit {

  private adDetails;
  private adLoaded:Promise<Boolean>;

  constructor(private adService:AdvertisementService) { }

  ngOnInit() {
    this.getAd("A250");
  }

  getAd(id) {
    this.adService.findAdById(id).subscribe(data=>{
      this.adDetails=data;
      this.adLoaded=Promise.resolve(true);
    });
  }

}
