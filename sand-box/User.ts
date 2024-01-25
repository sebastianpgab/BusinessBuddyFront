import { Person } from "./Person";

export class User extends Person implements IIntroduce{
    email:string;
    hasAdminPermission: boolean;
    age:number;

    constructor(email:string, hasAdminPermission:boolean, name: string, surname: string, age: number){
        super(name, surname)
        this.email = email;
        this.hasAdminPermission = hasAdminPermission;
        this.age = age;
    }
   override method() {
    console.log("Method form derived class")
   }

   sayHello(): void {
       console.log(`Hello I am ${this.name}`);
   }

}