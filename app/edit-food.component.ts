import {Component} from angular2/core;
import {Food} from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
