import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

   <h1>Przykłady interpolacji</h1>
   <p>Imie {{name.toUpperCase()}}</p>
   <p>Wiek {{25}}</p>
   <p>Jest dorosły {{isAdult}}</p>

   <p>----------------</p>
   <h1>Przykład property bindingu</h1>
   <p [class.changeColour] = "isActiv">Dupa</p>
   <button [disabled] = "isActiv">Kliknij</button>
   <div [style.color]="isHighlighted ? 'red' : 'blue'">Kolor</div>
   <div [class.changeFont]= "changeFont">Tekst Tekst Tekst</div>
   <input [value]= "name">

   <p>----------------</p>
   <h1>Przykłady event bindingu</h1>
   <button (click)="changeFontMethod()" type="button" >Zmień czcionkę</button>
   <input type="text" (input)="onInputChange($event)"> 

   <p>---------------</p>
   <h1>Dwukierunkowy binding - ngModel</h1>

   <input type="text" [(ngModel)]= "name">

  `,
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
  isActiv = false;
  isHighlighted = true;
  changeFont:boolean = true;

  changeFontMethod() {
  this.changeFont = !this.changeFont; 
}

onInputChange(event: Event){
   let inputElement = event.target as HTMLInputElement;
   console.log(inputElement.value)
}


}
