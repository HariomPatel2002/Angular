import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
    console.log('Product Service Initialized');
   }
   getProductData(){
    return [
      {name:'mobile', brand:'samsung', price:25000},
      {name:'laptop', brand:'dell', price:55000},
      {name:'tv', brand:'lg', price:45000},
      {name:'watch', brand:'fastrack', price:5000},
    ]
   }
}
