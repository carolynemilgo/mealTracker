//Root component of the meal tracker application
import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddMealsComponent} from './add-meals.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Meal Tracker Application';
//sample meals displayed under the logged meals in the app
  public meals: Meal[] = [
    {
      name: 'Githeri',
      description: 'Crazy mixture of beans, maize and cabbages',
      calories: 150
    },
    {
      name: 'Guacamole and plantain',
      description: 'Yuckiest food ever. Yuck, yuck,yuck',
      calories: 550
    },
    {
      name: 'Spaghetti and meatballs',
      description: 'yummy palatable strings and juicy meatballs',
      calories: 600
    },
    {
      name: 'Barbeque chicken pizza',
      description: '22inches and full of cheese, onion rings and chicken toppings',
      calories: 1000
    }
  ];

  selectedMeal: Meal;
  onSelect(meals: Meal): void {
    this.selectedMeal = meals;
  }
  addMeals(aNewMeal: Meal) {
    this.meals.push(aNewMeal);
  }
  //function for butto to allow closure of form after editing a meal
  toggleDone(meals: Meal){
    this.selectedMeal= null;
  }

  public selectedOption: string = "all";
  onChange(myOptions) {
    this.selectedOption = myOptions;
    console.log(myOptions);
  }

}
export class Meal {
  constructor(public name: string, public description: string, public calories: number) {
  }
}
