import { Component, OnInit } from '@angular/core';
import { OrderPlacedDetials } from '../../model/checkoutModels/orderPlacedDetails';
import { CookieService } from 'ngx-cookie';
import { Product } from 'src/app/model/product';
import { PaymentDetails } from 'src/app/model/checkoutModels/paymentDetails';
import { OrderDetails, Item } from '../../model/checkoutModels/orderDetails';
import { BillingDetails } from '../../model/checkoutModels/billingDetails';
import { NgForm } from '@angular/forms';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  private orderPlacedDetails:OrderPlacedDetials=new OrderPlacedDetials;
  private toPayWithCard:Boolean=false;
  private billingDetails:BillingDetails= new BillingDetails;
  private paymentDetails:PaymentDetails=new PaymentDetails;
  private orderDetails:OrderDetails=new OrderDetails;
  private items:Item[]=[];
  private toShow:Boolean=true;
  private today=new Date();
  public productList:Product[] = [];
  public termsRead:number=0;
  public isCompleted:boolean=false;

  constructor(private _cookieService:CookieService, private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    var cartObject = this._cookieService.getObject("checkoutCart");

    var prodArr = [];
    prodArr.push(cartObject);

    this.productList = [];

    var testProd:Product;

    prodArr[0].forEach( (p) => {

      testProd = new Product();
      testProd = p;

      // push each product into 'productList'
      this.productList.push(testProd); 
    });

    var subtotal:number=0;
    for(var i=0; i <this.productList.length; ++i) {
      let item:Item=new Item;
      item.pid=this.productList[i].pid;
      item.quantity=this.productList[i].qty;
      item.unitPrice=this.productList[i].price;

      this.items.push(item);
      subtotal=subtotal+(item.unitPrice*item.quantity);
    }
    console.log(this.items);
    console.log(subtotal);
    var tax=subtotal*0.0725;
    console.log(tax);
    this.orderDetails.items=this.items;
    this.orderDetails.shippingCharge=0;
    this.orderDetails.subtotal=subtotal;
    this.orderDetails.tax=tax;
    this.orderDetails.total=subtotal+tax;
  }



  showPromo(){
    this.toShow=!this.toShow;
  }



  payWithCard(data) {
    if (data === true) {
      this.paymentDetails.paymentType= "card"; //cash vs card
      this.paymentDetails.creditCardNumber=null;
      this.paymentDetails.creditCardType=null; //mastercard, visa, discover, etc.
      this.paymentDetails.expDate=null;
      this.paymentDetails.cvv=null;
    } else {
      this.paymentDetails.paymentType= "cash"; //cash vs card
      this.paymentDetails.creditCardNumber=null;
      this.paymentDetails.creditCardType=null; //mastercard, visa, discover, etc.
      this.paymentDetails.expDate=null;
      this.paymentDetails.cvv=null;
    }
    this.toPayWithCard=data;
  }



  placeOrder() {
    if (this.termsRead==0) {
      alert("Please indicate you have read the terms and conditions.");
      return;
    }
    this.orderPlacedDetails.billingDetails=this.billingDetails;
    this.orderPlacedDetails.orderDetails=this.orderDetails;
    this.orderPlacedDetails.paymentDetails=this.paymentDetails;
    var maxID=999999999999;
    var minID=100000000000;
    this.orderPlacedDetails.orderId=Math.floor(Math.random()*(maxID-minID+1) +minID);
    this.orderPlacedDetails.orderDate=new Date;

    console.log(this.orderPlacedDetails);

    this._cookieService.removeAll();

    this.shoppingCartService.checkout(this.orderPlacedDetails).subscribe(data => {
      console.log(data);
      this.isCompleted=true;
    });

  }
}
