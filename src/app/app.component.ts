import { Component} from '@angular/core';
import { Customer } from './customer/customer';


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
   <p>-----------------</p>
  <h3>Dyrektywa ngSwitch</h3>

  <ng-container [ngSwitch]="age">
    <ng-container *ngSwitchCase="25">Pierwszy switch</ng-container>
    <ng-container *ngSwitchCase="24">Drugi switch</ng-container>
    <ng-container *ngSwitchDefault>nieznany</ng-container>
  </ng-container>  

  <p>-----------------</p>
  <h3>Dyrektywa ngFor</h3>
  <ul>
    <li *ngFor="let animal of animals">{{animal}}</li>
  <ul>
  <p>-----------------</p>

  <p>Imie: {{customer.name}}</p>
  <p>Nazwisko: {{customer.surName}}</p>
  <p>Wiek: {{customer.age}}</p>

  <select [(ngModel)]="customer">
    <option *ngFor="let c of customers" [ngValue] = "c">wybierz klienta: {{c.name}}</option>
  </select>

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
