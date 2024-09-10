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
  <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white h-12 shadow-lg fixed top-0 left-0 w-full z-50">
  <div class="container mx-auto flex justify-between items-center h-full">
    <h1 class="text-lg font-extrabold">Foodie Delight</h1>
      
    </div>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class App {
  name = 'Foodie Delight';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: RestaurantListComponent },
      { path: 'add', component: RestaurantAddComponent },
      { path: 'edit/:id', component: RestaurantEditComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]),
  ],
}).catch((err) => console.log(err));
