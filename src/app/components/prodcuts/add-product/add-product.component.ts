import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit() {
  }

  pid:string;
  sku:string;

  title:string;

  category:string;
  brand:string;

  price: number;
  sellPrice:number;
  rewardPoint:number;
  stock:string;

  color:string;
  size:number;
  weight:number;

  vendorName:string;
  rating:number;

  imageURL:string;
  overview:string;
  description:string;
  fetures:string;
  reviews:string;
  technicalSpecs:string[];

  submit():void {
    var product = {pid:this.pid, 
                  sku:this.sku,
                  title:this.title,
                  category: this.category,
                  brand:this.brand,
                  price:this.price,
                  sellPrice:this.sellPrice,
                  rewardPoint:this.rewardPoint,
                  stock:this.stock,
                  color:this.color,
                  size:this.size,
                  weight:this.weight,
                  rating:this.rating,
                  imageURL:this.imageURL,
                  overview:this.overview,
                  description:this.description,
                  fetures:this.fetures,
                  reviews:this.reviews,
                  technicalSpecs:this.technicalSpecs};             
                  console.log(product);
      this.productService.uploadProduct(product).subscribe(data =>{
        if(data.status== "success"){
          console.log('save successfull');
        }
      });            
  }
  

}
