import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './app/restaurant-list/restaurant-list.component';
import { RestaurantAddComponent } from './app/restaurant-add/restaurant-add.component';
import { RestaurantEditComponent } from './app/restaurant-edit/reataurant-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold text-center mb-4">Foodie Delight</h1>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class App {
  name = 'Foodie Delight';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: RestaurantListComponent },
      { path: 'restaurants/add', component: RestaurantAddComponent },
      { path: 'restaurants/edit/:id', component: RestaurantEditComponent },
      { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
    ]),
  ],
}).catch((err) => console.log(err));
