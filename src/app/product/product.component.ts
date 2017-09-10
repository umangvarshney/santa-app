import { Component, OnInit } from '@angular/core';

import {ProductService} from '../service/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  Products = [];
  prod = [];
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getProducts(1).subscribe(res=>{
      this.Products = res;
      this.prod.push(this.Products);
    },
    error=>{
      console.log(error);
    }
  );
  }

}
