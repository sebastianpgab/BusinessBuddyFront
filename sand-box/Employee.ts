import {Person} from "./Person"
import {IEmployee} from "./IEmployee"


export class Employee extends Person implements IEmployee{

    lenghtOfService: number;
    position: string;

    constructor(name:string, surname: string,lenghtOfService: number, position: string){
        super(name, surname);
        this.lenghtOfService = lenghtOfService;
        this.position = position;
    }
        
    introduceYourself() {
        console.log("Method from subclass");
    }

    override exampleMethod(){
        console.log("Override method form subclass");
    }
}