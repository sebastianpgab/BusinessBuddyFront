import { Component} from '@angular/core';
import { Customer } from './customer';


@Component({
  selector: 'app-root',
  templateUrl: './customer.component.html',
  styles: [ 
 '.changeColour {color: blue}',
 '.spacialStyle {color: red; text-decoration: underline; }',
 '.changeFont {font-family: "Arial"}'
]
})


export class AppComponent {
  name = 'Sebastian';
  age = 25
  isAdult = false;
  isActiv = true;
  isHighlighted = true;
  changeFont:boolean = true;
  animals: string[]= ["cat", "dog", "mouse"]

  customers: Customer[] = [
    {
     id: 1,
     name: "sebastian",
     surName: "piątkowski",
     age: 25
     },

     {
       id: 2,
       name: "albert",
       surName: "wąsik",
       age: 25
     },

     {
       id: 3,
       name: "eugeniusz",
       surName: "bodo",
       age: 25
     }

 ]

  customer: Customer = this.customers[0];


  

  changeFontMethod() {
  this.changeFont = !this.changeFont; 
}

onInputChange(event: Event){
   let inputElement = event.target as HTMLInputElement;
   console.log(inputElement.value)
}


}
