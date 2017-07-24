//using pipes to filter details for the user
import {Pipe, PipeTransform} from '@angular/core';
import {Meal, AppComponent} from './app.component';


@Pipe({
  name: "calories",
  pure: false

})
export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], sieveCalories) {
    var result: Meal[] = [];//declare result which is of type Meal
    //function to determine foods with calories greater than 500
    if (sieveCalories === "Above 500 Calories") {//if selected option is above 500 calories
      for (var j = 0; j < input.length; j++) {//loop through all the existing food items
        if (input[j].calories >= 500) {//if greater or greater than 500 calories
          result.push(input[j]);//push entry to the results array
        }
      }
      return result;
    }

    else if (sieveCalories === "Less than 500 Calories") {

      //function to determine foods with calories with less than 500
      for (var j = 0; j < input.length; j++) {//loop through all the existing food items
        if (input[j].calories < 500) {//if less than 500 calories
          result.push(input[j]);//push entry or food item into the results array
        }
        return result;
      }
    }
    else {
      return input;//return all the food items if no option is selected or user does not choose to filter foods
    }
  }
}
