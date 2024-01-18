import { Component } from '@angular/core';
import { CreateProductFormComponent } from '../../components/forms/create-product-form/create-product-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CreateProductFormComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
