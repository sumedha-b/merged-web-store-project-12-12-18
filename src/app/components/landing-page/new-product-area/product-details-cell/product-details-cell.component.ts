import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../model/product';

@Component({
  selector: 'app-product-details-cell',
  templateUrl: './product-details-cell.component.html',
  styleUrls: ['./product-details-cell.component.css']
})
export class ProductDetailsCellComponent implements OnInit {

  @Input("productItem")
  public productDetails:Product;

  constructor() { }

  ngOnInit() {
  }

}
