{
// OOP Inheritance


class Parent {
    name: string;
    age: number;
    address: string

    constructor(name: string,  age: number, address: string){
        this.name = name,
        this.age = age,
        this.address = address
     }
     takeClass(numOfHour : number) {
  console.log(`this ${this.name} will sleep for ${numOfHour}`)
     }
}


class Student extends Parent {
 
    constructor( name: string, age: number,address: string){
        super(name, age, address)
     }
     takeClass(numOfHour : number) {
  console.log(`this ${this.name} will sleep for ${numOfHour}`)
     }
}

const student= new Student(' Mr. X', 22, "ctg")

class Teacher extends Parent {
    designation?: string;
    
    constructor(name: string, age: number, address: string, designation?: string){
        super(name, age, address, )
        this.designation = designation;
     }
     takeClass(numOfClass:number){
        console.log(`this ${this.name} will take for ${numOfClass}`)
     }
}
 
const teacher = new Teacher('mr.y', 55, 'ctg', )






//
}