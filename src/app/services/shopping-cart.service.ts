import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private behaviorSubject = new Rx.BehaviorSubject<Product>(new Product());
  productObservable = this.behaviorSubject.asObservable();

  constructor() { } 

  public addProductToCart(pproduct: Product) {
    this.behaviorSubject.next(pproduct);
  }



}
