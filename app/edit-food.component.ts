import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div class="food-form">
    <h3>Edit Name: </h3>
    <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
    <h3>Edit description: </h3>
    <input [(ngModel)]="food.description" class="col-sm-8 input-lg food-form"/>
    <h3>Edit calories: </h3>
    <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
  </div>
  `
})
export class EditFoodComponent {
  public food: Food;
}
