import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "health",
  pure:false

})
export class FoodPipe implements PipeTransform {
  transform(input: Food[], args) {
    var healthScore = args[0];
    if(healthScore === "low") {
      return input.filter((food) => {
        if(food.calories < 300){
        return !food.healthScore;
      }
    });
  } else if (healthScore === "high") {
    return input.filter((food) => {
      if(food.calories > 300){
        return !food.healthScore;
        }
      });
    } else {
    return input;
    }
  }
}
