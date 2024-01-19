import { Component } from '@angular/core';
import { CreateProductFormComponent } from '../../components/forms/create-product-form/create-product-form.component';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CreateProductFormComponent, ProductCardComponent],
  providers: [ProductService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private productService: ProductService) {}

  get productList(){
    return this.productService.getProductList();
  }
}
