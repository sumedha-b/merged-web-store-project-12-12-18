import { Component, OnInit } from '@angular/core';
import {LadiesclothsService} from 'src/app/services/ladiescloths.service'
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-ladies-cloths',
  templateUrl: './ladies-cloths.component.html',
  styleUrls: ['./ladies-cloths.component.css']
})
export class LadiesClothsComponent implements OnInit {
  public ladiesclothsProduct:[]=[];
  public baseURI:String="";
  constructor(private ladiesclothsService:LadiesclothsService) { }

  ngOnInit() {
   this.ladiesclothsService.getladiesclothsProduct().subscribe((data)=>{
    for(var key in data){
      this.ladiesclothsProduct[key]=data[key];
    }
    console.log(this.ladiesclothsProduct);
    this.baseURI=AppConfig.BASE_ENDPOINT;
   });
   
  }

}
