import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  name = new FormControl("");
  price = new FormControl("");
  description = new FormControl("");

  onSubmit(event: Event){
    event.preventDefault();

    const data = {
      name: this.name.value,
      price: this.price.value,
      description: this.description.value
    }

    console.log(data);

    this.name.setValue("");
    this.price.setValue("");
    this.description.setValue("");
  }
}
