import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-create-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  constructor(private productService: ProductService) {}

  name = new FormControl("");
  price = new FormControl("");
  description = new FormControl("");

  onSubmit(event: Event){
    event.preventDefault();

    const data = {
      name: this.name.value as string,
      price: Number(this.price.value as string),
      description: this.description.value as string
    }

    this.productService.addProduct(data);    

    this.name.setValue("");
    this.price.setValue("");
    this.description.setValue("");
  }
}
