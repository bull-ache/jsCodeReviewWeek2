import {Component, EventEmitter} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="new-food-form">
  <h3>Add a Food:</h3>
  <input placeholder="Name" class="col-sm-8 input-lg" #newName>
  <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
  <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
  <button class="add-food" (click)="addFood(newName, newDescription, newCalories)">Add</button>
</div>
  `
})

export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<any>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(userName: HTMLInputElement, userDescription: HTMLInputElement, userCalories: HTMLInputElement){
    var foodArray = [userName.value, userDescription.value, userCalories.value]
    this.onSubmitNewFood.emit(foodArray);
    userName.value = "";
    userDescription.value = "";
    userCalories.value = "";
  }
}
