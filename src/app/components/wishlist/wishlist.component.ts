import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CookieService } from 'ngx-cookie';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { SavelaterService } from 'src/app/services/savelater.service';
import { SaveLater } from 'src/app/model/savelater';
import { WishList } from 'src/app/model/wishlist';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/app.config';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  public productList:Product[] = [];  

  public url = AppConfig.BASE_ENDPOINT;    

  constructor(
    private _cookieService:CookieService, 
    private shoppingCartService:ShoppingCartService, 
    private saveLaterService:SavelaterService, 
    private wishlistService:WishlistService, 
    private productService:ProductService, 
    private router: Router
  ) { }

  ngOnInit() {

    var testProd:Product = new Product();    

    // Now load the Save For Later items from db
    var wishListItem:WishList = new WishList();
    wishListItem.cid = "C100"; // dummy customer id for now

    this.wishlistService.findWishListByCid(wishListItem.cid).subscribe(data =>{

      console.log("Now to init load the wish list from db");
      console.log("["+data[0].products[0]+"]");
      if( data[0].products[0] == ""){
        console.log("wish list is blank!!!");
      }
      else{
        // get the pids from the SFL list in products[]

        //this.productService.test(data[0].products[0]);

        this.productService.getProductByMultipleIds(data[0].products[0]).subscribe(data =>{
          console.log("returned data from get Product By Multiple Ids:")
          console.log(data);

          if(data && data.body && data.body[0] && data.body[0] != ""){

            console.log("data.body[0]");
            console.log( JSON.parse(data.body) );

            var arrayOfProducts = JSON.parse(data.body);

            arrayOfProducts.forEach( (p) => {

              testProd = new Product();
        
              console.log("p:");
              console.log(p);
              console.log("stringify p:");
              console.log(JSON.stringify(p));

              testProd = p;

              console.log("get Prod By Mult - testProd");
              console.log(testProd);

              this.productList.push(testProd);
            });
          }else{
            console.log("data was null !");
          }


          //this.saveForLaterList.push(data);
        });

      }


    });

  }

  uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }   

  removeStrFromCSV(list, value) {
    var separator = ",";
    var values = list.split(separator);
    for(var i = 0 ; i < values.length ; i++) {
      if(values[i] == value) {
        values.splice(i, 1);
        return values.join(separator);
      }
    }
    return list;
  }

  removeFromWishList(item, index){
    console.log("remove from wish list");
    console.log(item);
    console.log(item._id);

    // remove this from the wish list for this current customer

    var wishListItem:WishList = new WishList;
    wishListItem.cid = "C100"; // dummy customer id for now

    this.wishlistService.findWishListByCid(wishListItem.cid).subscribe(data =>{


      console.log("data[0].products");
      console.log(data[0].products);

      console.log("data[0].products[0]");
      console.log(data[0].products[0]);

      // get existing product id list
      wishListItem.products = data[0].products;

      console.log("item _id: "+ item._id);

      // now to remove it

      var removedList = this.removeStrFromCSV( wishListItem.products[0] , item._id);

      console.log("removed list:");
      console.log(removedList);

      wishListItem.products = [];
      wishListItem.products.push(removedList);

      console.log(wishListItem.products);

      // Save the updated wish list into the db

        // public editSaveForLater(saveLater:SaveLater,id)
        
        this.wishlistService.editWishList(wishListItem, wishListItem.cid).subscribe(data =>{
          if(data.status== "success"){
            console.log('Remove Wish List item - edit Wish List successfull - Wish List edited!');
                    
          }else{
            console.log("Remove Wish List item - edit Wish List failed:");
            console.log(data);
          }
        });

            // now remove it from the Wish list
            console.log("index: " + index);

            this.productList.splice(index, 1);        


    });

  } 





  addToCart(item){
    console.log(item);

    this.shoppingCartService.addProductToCart(item);
    
  }
  

}
