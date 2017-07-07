import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AddMealsComponent} from './add-meals.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // ./../styles.css',


})
export class AppComponent {
  title = 'Meal Tracker Application';

  public meals: Meal[] = [
    {
      name: 'Githeri',
      description: 'crazy mixture of beans, maize and cabbages',
      calories: 100
    },
    {
      name: 'Guacamole and plantain',
      description: 'yuckiest food ever',
      calories: 200
    },
    {
      name: 'Spaghetti and meatballs',
      description: 'yummy palatable strings',
      calories: 300
    }
  ];

  selectedMeal: Meal;
  onSelect(meals: Meal): void {
    this.selectedMeal = meals;
  }
  addMeals(aNewMeal: Meal) {
    this.meals.push(aNewMeal);
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
