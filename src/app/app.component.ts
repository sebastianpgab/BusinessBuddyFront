import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <h1>Przykłady interpolacji</h1>
   <p>Imie {{name.toUpperCase()}}</p>
   <p>Wiek {{25}}</p>
   <p>Jest dorosły {{isAdult}}</p>
   <p>----------------</p>
   <h1>Przykład propery bindingu</h1>
   <p [class.ChangeColour] = "isActiv">Dupa</p>

  `,
  styles: [ '.ChangeColour {color: blue}']
})
export class AppComponent {
  name = 'Sebastian';
  age = 25
  isAdult = false;
  isActiv = true;
}
