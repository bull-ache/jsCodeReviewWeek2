import { Component } from 'angular2/core';
// import { FoodListComponent } from './food-list.component';
// import { Food } from './food.model';


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  template: `
  <h3 *ngFor="#currentFood of foodList" (click)="foodClicked(currentFood)">

  </h3>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  foodClicked(clickedFood: Food): void {
    console.log(clickedFood);
  }
}




@Component({
  selector: 'my-app',
  // directives: [FoodListComponent],
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
      new Food("Pizza", "Dominoes", 715, 0),
      new Food("brussel sprouts", "vegetables", 150, 1),
      new Food("Ice Cream", "Ben and Jerry's", 954, 2)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
    console.log(clickedFood.description, clickedFood.calories);
}
}

export class Food {
  constructor(public name: string, public description: string, public calories: number, public id: number) {

  }
}
