import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-new-product-area',
  templateUrl: './new-product-area.component.html',
  styleUrls: ['./new-product-area.component.css']
})
export class NewProductAreaComponent implements OnInit {

  private trendingProducts:Product[]=[];
  private hotDealsProducts:Product[]=[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(products=>{
      var products1=products;
      this.sortByRatings(products);
      this.sortByDiscount(products1);
    });

  }

  public sortByRatings(products) {
    products.sort(function(a, b){
      return b.ratings-a.ratings;
    });
    
    for (var i=0; i<6; ++i) {
      this.trendingProducts[i]=products[i];
    }
    console.log("trendingProducts:")
    console.log(this.trendingProducts);
  }

  public sortByDiscount(products) {
    products.sort(function(a, b){
      return (a.price/a.sprice)-(b.price/b.sprice);
    });
    
    for (var i=0; i<6; ++i) {
      this.hotDealsProducts[i]=products[i];
    }
    console.log("hotDeals")
    console.log(this.hotDealsProducts);
  }

}
