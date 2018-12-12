import { Component, OnInit, Input } from '@angular/core';
import { OrderPlacedDetials } from 'src/app/model/checkoutModels/orderPlacedDetails';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  @Input("order")
  private orderPlacedDetails:OrderPlacedDetials;

  @Input("products")
  private productList:Product[]=[]

  constructor() { }

  ngOnInit() {
    console.log(this.orderPlacedDetails.billingDetails.country);
  }

}
