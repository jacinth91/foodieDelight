import { Injectable, numberAttribute } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants: Restaurant[] = [
    {
      id:1,
      name: "KFC",
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0450ce1a6ba19ea60cd724471ed54a8",
      description: "Pushkar Enclave",
      location: "Paschim Vihar",
    },
  ];

  constructor() {}

  getReataurants(): Restaurant[] {
    return this.restaurants;
  }

  addRestaurants(resturant: Restaurant): void {
    resturant.id = this.restaurants.length + 1;
    this.restaurants.push(resturant);
  }
  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find((r) => r.id === id);
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
