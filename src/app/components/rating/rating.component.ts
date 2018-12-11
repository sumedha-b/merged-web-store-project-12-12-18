import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input("rating")
  rating:number;
  fillStar:number[];
  emptyStar:number[];
  constructor(){
  }

  ngOnInit() {
    if(this.rating > 0){
      this.fillStar = new Array(this.rating).fill(this.rating);
    }
    if(this.rating < 5){
      this.emptyStar = new Array(5 - this.rating).fill(this.rating);
    }
  }
}
