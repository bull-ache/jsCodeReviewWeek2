import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food List</h1>
      <h3 *ngFor="#food of foods" (click)="foodWasSelected(food)">
        {{ food.name }}
      </h3>
    </div>
  `
  })

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
    new Food("Pizza", "Dominoes", 715),
    new Food("brussel sprouts", "vegetables", 150),
    new Food("Ice Cream", "Ben and Jerry's", 954),
    ];
  }

}
