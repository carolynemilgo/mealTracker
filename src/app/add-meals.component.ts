import {Component, Output, EventEmitter} from '@angular/core';
import {Meal, AppComponent} from './app.component';

@Component({
  selector:'addition',
  template:`

  <label> Name of the meal </label>
   <input type="text" #newName><p>
   <label> Brief Description </label>
   <input type="text" #desc><p>
    <label> Number of Calories </label>
   <input type="number" #cal><p>
   <button (click)="addMeals(newName.value,desc.value,cal.value);"> Edit Details</button>`

})
export class AddMealsComponent{
@Output() newMeal=new EventEmitter();
addMeals( name:string, description:string, calories:number){
  var newMealToPush:Meal=new Meal(name, description,calories);
  this.newMeal.emit(newMealToPush);
  // console.log(newMealToPush);


}
}
