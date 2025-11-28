import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from './services/product.service';
@Component({
  selector: 'app-root',
  imports:  [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  productData:{
    name: string;
    brand: string;
    price: number;
}[] | undefined;

  constructor(private productService: ProductService){

  }
  getProduct(){
    this.productData = this.productService.getProductData();
    console.log(this.productData);
  }
}
