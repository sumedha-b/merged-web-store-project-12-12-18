import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { AppConfig } from 'src/app/config/app.config';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product= new Product();
  public reviews:Review[] = [];
  public rating:number;
  public review:Review;
  url = AppConfig.PRODUCT_ENDPOINT + "/image";
  
  constructor(private route: ActivatedRoute,private productService: ProductService) {

  }

  ngOnInit() {
    this.review = new Review();
    this.route.params.subscribe((params)=>{
      
      this.productService.getProductByPid(params['id']).subscribe((data)=>{
        this.product = data.pop();
        this.product.techSpecs = JSON.parse(this.product.techSpecs+"");
        this.productService.getRateing(this.product.pid).subscribe(rdata=>{this.rating = rdata;
        console.log(this.rating)});
        this.productService.getReviewByPid(this.product.pid).subscribe(rvdata=>{
              this.reviews = rvdata;
            });
      });
    });
    
  }

  addReview():void{
    this.review.id = this.product.pid + "Amon";
    this.review.pid = this.product.pid;
    this.review.cid = "Amon";
    //console.log(this.review);
    this.productService.saveReview(this.review).subscribe(data=>{
      if(status == 'success'){
        this.review = new Review();
        console.log("post successfull");
      }else{
        console.log("could save review");
      }

    });
  }
}