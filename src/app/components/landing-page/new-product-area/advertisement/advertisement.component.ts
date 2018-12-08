import { Component, OnInit } from '@angular/core';
import { Advertisement } from 'src/app/model/advertisement';
import { AdvertisementService } from 'src/app/services/advertisement.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
  export class AdvertisementComponent implements OnInit {

    public status:boolean=true;

  private adDetails:Advertisement;
  private adLoaded:Promise<Boolean>;

  constructor(private adService:AdvertisementService) { 

  }

  ngOnInit() {
    this.adService.findAdById("A200").subscribe(data=>{
      this.adDetails=data;
      this.adLoaded=Promise.resolve(true);
    });
  }

}
