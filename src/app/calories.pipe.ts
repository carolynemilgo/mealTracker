import{Pipe, PipeTransform} from '@angular/core';
import {Meal, AppComponent} from './app.component';


@Pipe({
  name:"calories",
  pure:false

})
export class CaloriesPipe implements PipeTransform {
transform(input: Meal[], sieveCalories){
  var result: Meal[]=[];
  if(sieveCalories=== "Above 500 Calories"){
    for(var j=0; j<input.length; j++){
      if(input[j].calories >= 500){
        result.push(input[j]);
      }
    }
    return result;
  }
else if (sieveCalories === "Less that 500 Calories"){

  for(var j=0;j<input.length;j++){
    if(input[j].calories < 500){
      result.push(input[j]);
    }
    return result;
  }
}
else {
  return input;
}
}
}
