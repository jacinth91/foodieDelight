import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-reataurant-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reataurant-edit.component.html',
  styleUrl: './reataurant-edit.component.css',
})
export class RestaurantEditComponent implements OnInit  {
  restaurantForm: FormGroup;
  restaurantId!: number;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private restaurantService: RestaurantService, 
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      image: [''],
    });
  }
  ngOnInit(): void {
   
    this.restaurantId = +this.route.snapshot.paramMap.get('id')!;



    const restaurant = this.restaurantService.getRestaurantById(this.restaurantId);
    if (restaurant) {
      this.restaurantForm.patchValue(restaurant);
    }
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      this.restaurantService.updateRestaurant(this.restaurantId, this.restaurantForm.value);
      this.router.navigate(['/']); 
      this.restaurantForm.markAllAsTouched();

    }
  }
  goBack(): void {
    this.router.navigate(['/']); 
  }

}
