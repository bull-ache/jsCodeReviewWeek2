import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';


@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Food List</h1>
      <food-list
        [foodList]="foods"
        (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    </div>

  `
  })

export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza", "Dominoes", 715, 0),
      new Food("brussel sprouts", "vegetables", 150, 1),
      new Food("Ice Cream", "Ben and Jerry's", 954, 2)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log("parent", clickedFood.description, clickedFood.calories);
}
}
