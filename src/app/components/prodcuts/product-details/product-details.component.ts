import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product= new Product();
  url = AppConfig.PRODUCT_ENDPOINT + "/image";
  
  constructor(private route: ActivatedRoute,private productService: ProductService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      
      this.productService.getProductByPid(params['id']).subscribe((data)=>{
        this.product = data.pop();
        this.product.techSpecs = JSON.parse(this.product.techSpecs+"");
        console.log(this.product);
      });
    });
  }
}
