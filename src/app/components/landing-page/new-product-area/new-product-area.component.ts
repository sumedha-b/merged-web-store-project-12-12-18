import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-new-product-area',
  templateUrl: './new-product-area.component.html',
  styleUrls: ['./new-product-area.component.css']
})
export class NewProductAreaComponent implements OnInit {

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(testnum){ // should take product as parameter , not take id


    // dummy data
    var testProd:Product = new Product();

    console.log(testnum);

    if(testnum == 1){

    testProd.pid = "PAAA";
    testProd.title = "Test Product Title";
    testProd.price = 500;
    testProd.sprice = 350;
    testProd.imageURL = "assets/img/recent-review/02.jpg";

    }else if(testnum == 2){

      testProd.pid = "YZZZ";
      testProd.title = "A Nice Hat";
      testProd.price = 900;
      testProd.sprice = 50;      
      testProd.imageURL = "assets/img/recent-review/03.jpg"
    }

    console.log(testProd);

    this.shoppingCartService.addProductToCart(testProd);

    


  }

}
