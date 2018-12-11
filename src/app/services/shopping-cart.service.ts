import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import * as Rx from "rxjs";
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private behaviorSubject = new Rx.BehaviorSubject<Product[]>([]);
  productObservable = this.behaviorSubject.asObservable();

  public prodArray:Product[] = [];

  constructor(private _cookieService:CookieService) { } 

  public saveCheckoutProducts(aproduct: Product[]){
    console.log("save checkout products");
    console.log(aproduct);

    this._cookieService.remove('checkoutCart');
    this._cookieService.putObject("checkoutCart", aproduct );
  }

  public addProductToCart(pproduct: Product) {

    console.log("this.prodArray");
    console.log(this.prodArray);

    var found = this.prodArray.some(function (el) {
      return el.pid === pproduct.pid;
    });    

    if(found){
      console.log("is duplicate already!");
      // to do: increment qty
    }
    else{
      console.log("not a duplicate");

      this.prodArray.push(pproduct);
      this.behaviorSubject.next(this.prodArray);

    
      //var itemsInCart = JSON.parse(localStorage.getItem("cart"));
      //var itemsInCart = JSON.parse(sessionStorage.getItem('cart'));

      //var itemsInCart = this._cookieService.getObject("cart");

      //if(itemsInCart == null) itemsInCart = [];
      //itemsInCart = [];
      //itemsInCart.push(this.prodArray); 

      // Put the array into local storage
      //localStorage.setItem("cart", JSON.stringify(itemsInCart));

      // Put the array into session storage
      //sessionStorage.setItem("cart", JSON.stringify(itemsInCart));

      // Put the array into cookie
      this._cookieService.putObject("cart", this.prodArray );

      var itemsInCart = this._cookieService.getObject("cart");
      console.log("service - getObject: ");
      console.log(itemsInCart);
    }

  }

  /*
  public getAllProducts(){
    return this.prodArray;
  }
  */

  removeAllProductsFromCart(){
    this.prodArray = [];
    this.behaviorSubject.next(this.prodArray);
    this._cookieService.remove("cart");
    this._cookieService.remove("checkoutCart");    
  }

  removeProductFromCart(item, index){

    console.log(item);
    console.log("index is: "+ index);

    this.prodArray.splice(index, 1);    


    //var itemsInCart = JSON.parse(localStorage.getItem("cart"));
    //var itemsInCart = JSON.parse(sessionStorage.getItem('cart'));
    var itemsInCart = [];
    itemsInCart.push( this._cookieService.getObject("cart") );

    console.log("service - items in cart:");
    console.log(itemsInCart);

    itemsInCart[0].splice(index, 1);

    console.log("service - after splice:");
    console.log(itemsInCart[0]);

    //if(itemsInCart == null) itemsInCart = [];
    //itemsInCart = [];
    //itemsInCart.push(this.prodArray); 

    this.prodArray = itemsInCart[0];

    this.behaviorSubject.next(this.prodArray);

    // Put the array into local storage
    //localStorage.setItem("cart", JSON.stringify(itemsInCart));

    // Put the array into session storage
    //sessionStorage.setItem("cart", JSON.stringify(itemsInCart));

    // Put the array into cookie
    this._cookieService.putObject("cart", itemsInCart[0] );    

  }

}
