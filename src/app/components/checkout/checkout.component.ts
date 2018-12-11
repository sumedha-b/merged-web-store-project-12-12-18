import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public productList:Product[] = [];

  constructor(private _cookieService:CookieService) { }

  ngOnInit() {
    // get the array of products from cookie
    var cartObject = this._cookieService.getObject("checkoutCart");

    var prodArr = [];
    prodArr.push(cartObject);

    this.productList = [];

    var testProd:Product;

    prodArr[0].forEach( (p) => {

      testProd = new Product();
      
      console.log("p:");
      console.log(p);
      console.log("stringify p:");
      console.log(JSON.stringify(p));
      
      testProd = p;

      // push each product into 'productList'
      this.productList.push(testProd); 
    });            
    
    
  }

}
