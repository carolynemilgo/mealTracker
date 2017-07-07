import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddMealsComponent} from './add-meals.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .meals {
   margin: 0 0 2em 0;
   list-style-type: none;
   padding: 0;
   width: 15em;
 }
 .meals .badge {
     display: inline-block;
     font-size: small;
     color: white;
     padding: 0.8em 0.7em 0 0.7em;
     background-color: #607D8B;
     line-height: 1em;
     position: relative;
     left: -1px;
     top: -4px;
     height: 1.8em;
     margin-right: .8em;
     border-radius: 4px 0 0 4px;
   }
   .selected {
   background-color: #CFD8DC !important;
   color: white;
 }
 .meals li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .meals li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .meals .text {
    position: relative;
    top: -3px;
  }
 `],

})
export class AppComponent {
  title = 'Meal Tracker Application';

public meals: Meal[]=[
  {
  name: 'Githeri',
  description: 'crazy mixture of beans, maize and cabbages',
   calories:100},
   {
   name: 'Guacamole and plantain',
   description: 'yuckiest food ever',
  calories:200},
    {
  name: 'Spaghetti and meatballs',
  description: 'yummy palatable strings',
   calories:300}
];

selectedMeal: Meal;
onSelect(meals: Meal): void{
  this.selectedMeal=meals;
}

addMeals(aNewMeal: Meal){
  this.meals.push(aNewMeal);
}

public selectedOption: string="all";
onChange(myOptions){
  this.selectedOption=myOptions;
  console.log(myOptions);
}

}

export class Meal {
  constructor(public name: string, public description: string, public calories: number){

  }


}
