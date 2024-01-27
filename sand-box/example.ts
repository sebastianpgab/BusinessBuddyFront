
// Teraz możesz używać Person, User i IIntroduce
import { Employee } from "./Employee";

import { Person } from "./Person";


//Jak działa silne typowanie ?

let variableStronglyTyped = 5;

//variableStronglyTyped = "string" //bład kompilacji

//Jak zepsuć silne typowanie w TypeScript? ?

let variable:any = 5;

variable = "string";

variable = true;


//Tablice

//sposób_1
let arrayList: number[] = [1,2,3,4]
//sposób_2
let arrayList2: Array<number>;
//łączenie tablic ze sobą
let arrayList3 = [1354, 54, 6464, ...arrayList]

//Interpolacja 

let string1:string = "Ciąg znagów z 1 stringa";
let string2:string = "Ciąg znaków z 2 stringa";

//console.log(`String 1 = ${string1} String 2 = ${string2}` )

//Funkcje

//funkcja z opcjonalnym parametrem
function welcome(name: string, age?:number): string {
    return `Hello ${name}`
}

//funckja z parametrem domyślnym
function welocme2(age = 5): number{
    return age;
}

//spread (operator rozwijania)
function welocme3(...surname: number[]): string {
    return surname.join(",");
}

welocme3(3,4,5,6,7);

//console.log(welocme3(3,4,5,6,7, ...arrayList3));

//Operator spread, a zwykłe przypisanie 
//tu jest przekazanie wartości referencyjnej do innej
let tab = arrayList3;
//tu jest sklonowaie tablicy (teraz są dwie niezależne)
let tab2 = [...arrayList3];

console.log(tab)
console.log(tab2)

//arrow function - funkcje strzałkowe 
function funkcja1(name: string): string {
    return `cześć ${name}`
}

let names: string[] = ["sebastian", "damian"]

console.log(names.map(name => `cześć ${name}`));

//aliasy Typu

type myType = string | number;

let variable3: myType = 5;

// interfejsy a klasy

/*interface Person {
    name: string;
    surame:string;
}

class Person1{
    name?: string;
    surname?: string;
    constructor(name:string, surname:string){
        this.name= name,
        this.surname = surname;
    }
    
    metoda(): void{
        console.log("Metoda z klasy bazowej");
    }
}

class Client extends Person1{
    isAdult: boolean;
    constructor(name:string, surname:string, isAdult: boolean){
        super(name, surname)
        this.isAdult = isAdult;
    }

    override metoda(): void{
     console.log("Metoda z klasy pochodej");
    }
}

let osoba2: Person1 = new Person1("Sebastian", "Piątkowski");

osoba2.metoda();
*/

//let ososb: Person = new Person("Sebastian", "Piątkowski");

//ososb.method();

let osoba:Person = new Employee("Sebastian", "Piątkowski", 15, "esdas");

osoba.exampleMethod();
