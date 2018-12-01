import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-scart',
  templateUrl: './scart.component.html',
  styleUrls: ['./scart.component.css']
})
export class ScartComponent implements OnInit {

  public productList:Product[] = [];

  constructor(private productService:ProductService, private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCartService.productObservable.subscribe(
      product=>{
        this.productList.push(product);
      }
    );
  }
  

  uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }  

  removeItem(item, index){
    //alert('hi');
    console.log(item);
    console.log("index is: "+ index);

    //this.shoppingCartService.removeProductFromCart(item, index);

    // remove item at index
    this.productList.splice(index, 1);

  }


}