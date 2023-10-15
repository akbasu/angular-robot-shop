import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'akb-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})

export class CatalogComponent {
  products!: IProduct[];
  filter: string = '';
 

  constructor(
    private cartSvc: CartService,
    private prodSvc: ProductService 
  ) { }
  
  ngOnInit(){
    this.prodSvc.getProducts().subscribe(prods => {
      this.products = prods;
    })
  }

  getFilteredProducts(){
    return this.filter === ''
      ? this.products
      : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct){    
    this.cartSvc.add(product);
  }
}
