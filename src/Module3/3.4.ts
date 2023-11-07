{
//
//type guard -- instanceof

class Animal{
    name: string;
    species: string

    constructor(name: string, species: string){
        this.name = name;
        this.species = species;
    }
makeSound() {
    console.log('im using')
}

}

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log("i am barking")
    } 
}
class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species)
    }
    makeBark(){
        console.log("i am mew")
    } 
}

const getAnimal = (animal : Animal) => {
    if(animal instanceof Dog){
        animal.makeBark()
    }else if( animal instanceof Cat){
        animal.makeSound
    }else{
        animal.makeSound
    }
   
}

const dog = new Dog("dog bhai", 'dog');
const cat = new Cat("dog bhai", "cat");

getAnimal(dog)



//
}