import { Injectable, numberAttribute } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants: Restaurant[] = [];

  constructor() {}

  getReataurants(): Restaurant[] {
    return this.restaurants;
  }

  addRestaurants(resturant: Restaurant): void {
    resturant.id = this.restaurants.length + 1;
    this.restaurants.push(resturant);
  }

  updateRestaurant(id: number, updateRestaurant: Restaurant): void {
    const index = this.restaurants.findIndex((r) => r.id === id);
    if (index > -1) {
      this.restaurants[index] = updateRestaurant;
    }
  }

  deleteRestaurant(id: number): void {
    this.restaurants = this.restaurants.filter((r) => r.id !== id);
  }
}
