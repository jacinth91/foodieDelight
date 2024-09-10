import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';
@Component({
  selector: 'app-restaurant-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-list.component.html',
  styleUrl: './restaurant-list.component.css',
})
export class RestaurantListComponent {
  restaurants: Restaurant[] = [];
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    
    this.restaurants = this.restaurantService.getReataurants();
  }
  deleteRestaurant(id: number): void {
   
    this.restaurantService.deleteRestaurant(id);
    
    this.restaurants = this.restaurantService.getReataurants();
  }
}
