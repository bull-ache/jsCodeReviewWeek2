import { Component, EventEmitter } from 'angular2/core';
// import { FoodListComponent } from './food-list.component';
// import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.description }}</h3>
  `
})

export class FoodComponent {
  public food: Food;
}


@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent],
  template: `
  <food-display *ngFor="#currentFood of foodList"
    (click)="foodClicked(currentFood)"
    [class.selected]="currentFood === selectedFood"
    [food]="currentFood">
    {{ currentFood.description }}
  </food-display>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}




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

export class Food {
  constructor(public name: string, public description: string, public calories: number, public id: number) {

  }
}
