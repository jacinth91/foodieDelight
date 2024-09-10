import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './restaurant-add.component.html',
  styleUrl: './restaurant-add.component.css'
})
export class RestaurantAddComponent {
  restaurantForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router
  ) {
    // Initialize the form with validators
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      image: [''], // Optional
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      this.restaurantService.addRestaurants(this.restaurantForm.value);
      this.router.navigate(['/']);
    }
  }
}
