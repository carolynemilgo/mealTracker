import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {AddMealsComponent} from './add-meals.component'
import { Output, EventEmitter} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {CaloriesPipe} from './calories.pipe'


@NgModule({
  declarations: [
    AppComponent,
    AddMealsComponent,
    CaloriesPipe
    //MealDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
