import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `

  <div class="food-form">

    <h2>Details (change to edit): </h2>
    <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
    <h5>Description</h5>
    <input [(ngModel)]="food.description" class="col-sm-8 input-lg food-form"/>
    <h5>Calories</h5>
    <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
  </div>
  `
})
export class EditFoodComponent {
  public food: Food;
}
