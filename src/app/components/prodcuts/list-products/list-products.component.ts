import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnInit {
  constructor(private productService:ProductService) {}

  products:[];
  fillstar:number[] = [3,3,3];
  emptystar:number[] = [3,3];
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    }); 
  }

  setRatings(ratings:number):void{
    this.fillstar = Array(ratings).fill(ratings);
    if(ratings < 5){
      this.emptystar = Array(5-ratings).fill(5-ratings);
    }
    
  }
  testFuct():string{
    return 'test';
  }
}