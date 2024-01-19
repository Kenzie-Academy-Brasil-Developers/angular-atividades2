import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/product.interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  constructor(private productService: ProductService) {}

  @Input() product!: IProduct;

  onHandleClick(){
    this.productService.removeProduct(this.product.id);
  }  
}
