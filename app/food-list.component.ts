import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { FoodPipe} from './food.pipe';
import { ShowFoodDetailsComponent } from './show-food-details.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  pipes: [FoodPipe],
  directives: [FoodComponent, EditFoodComponent, NewFoodComponent, ShowFoodDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected" >Show All</option>
    <option value="low">Show Healthy Food</option>
    <option value="high">Show Unhealthy Food</option>
  </select>
  <div class="display-container" *ngFor="#currentFood of foodList | health:filterHealth">
    <food-display (click)="foodClicked(currentFood)"
      [class.selected]="currentFood === selectedFood"
      [food]="currentFood">
    </food-display>
    <show-food-details *ngIf="currentFood === selectedFood" [food]="selectedFood">
    </show-food-details>
    </div>
    <edit-food *ngIf="selectedFood" [food]="selectedFood">
    </edit-food>
    <new-food
      (onSubmitNewFood)="createFood($event)">
    </new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterHealth: string = "all";
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log("child", clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(foodArray: any): void {
  this.foodList.push(new Food(foodArray[0], foodArray[1], foodArray[2], this.foodList.length)
  );
}
onChange(filterOption) {
    this.filterHealth = filterOption;
  }
}
