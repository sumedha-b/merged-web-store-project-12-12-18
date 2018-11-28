import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  public product:Product = new Product();
  
  submit():void {
           
      console.log(this.product);
      this.productService.uploadProduct(this.product).subscribe(data =>{
        if(data.status== "success"){
          console.log('save successfull');
        }
      });            
  }
  

}
