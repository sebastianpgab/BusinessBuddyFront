import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

   <h3>Przykłady interpolacji</h3>
   <p>Imie {{name.toUpperCase()}}</p>
   <p>Wiek {{25}}</p>
   <p>Jest dorosły {{isAdult}}</p>

   <p>----------------</p>
   <h3>Przykład property bindingu</h3>
   <p [class.changeColour] = "isActiv">Dupa</p>
   <button [disabled] = "isActiv">Kliknij</button>
   <div [style.color]="isHighlighted ? 'red' : 'blue'">Kolor</div>
   <div [class.changeFont]= "changeFont">Tekst Tekst Tekst</div>
   <input [value]= "name">

   <p>----------------</p>
   <h3>Przykłady event bindingu</h3>
   <button (click)="changeFontMethod()" type="button" >Zmień czcionkę</button>
   <input type="text" (input)="onInputChange($event)"> 

   <p>---------------</p>
   <h3>Dwukierunkowy binding - ngModel</h3>

   <input type="text" [(ngModel)]= "name">

   <p>-----------------</p>
   <h3>Dyrektywy *ngIf</h3>

   <div type="button">
    <label> <input type="checkbox" [(ngModel)]="isActiv"> Pokaz napis</label>
   </div>

   <div *ngIf="isActiv; then tekst1 else tekst2"></div>
   <ng-template #tekst1> <p>Tekst jeden<p> </ng-template>
   <ng-template #tekst2> <p>Tekst dwa<p> </ng-template>

   <div *ngIf="isActiv"><p>Tekst trzy</p></div>


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
  isActiv = true;
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
