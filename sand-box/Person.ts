export class Person {
    name:string;
    surname: string;
    
    constructor(name:string, surname: string){
        this.name = name;
        this.surname = surname;
    }

    exampleMethod(){
        console.log("Overrided method form base class");
    }
}