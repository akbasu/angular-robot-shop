import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'akb-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct){
    return '/assets/images/robot-parts/' + product.imageName;
  }

  buyProduct(product: IProduct){
    this.buy.emit();
    //console.log(`product ${product.name} added to cart`);
  }

}
