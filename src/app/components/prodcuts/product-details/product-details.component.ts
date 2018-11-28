import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public product:Product= new Product();

  constructor(private route: ActivatedRoute,private productService: ProductService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      
      this.productService.getProductByPid(params['id']).subscribe((data)=>{
        this.product = data.pop();
         console.log(this.product);
      });
    });
  }
}
