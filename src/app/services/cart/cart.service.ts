import { Injectable } from '@angular/core';
import { IProduct } from '../../catalog/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart: IProduct[] = [];


  constructor(
    private httpClient: HttpClient
  ) { }

  add(product: IProduct){
    this.cart.push(product);
    this.httpClient.post('/api/cart', this.cart).subscribe(() => {
      console.log(`product ${product.name} added to cart`);
    });
  }
}
