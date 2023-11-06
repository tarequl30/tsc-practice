{
//OOP - Class

class Animal {
//    public name: string;
//    public species: string;
//    public sound: string;

   //parameter properties

    constructor(public name: string,public species: string,public sound: string){
        // this.name= name;
        // this.species=species;
        // this.sound = sound
    }

    makeSound(){
        console.log(`the ${this.name} say ${this.sound}`)
    }
}

const dog = new Animal('German Shepard' , "dog", 'sound')
const cat = new Animal('Persian', 'cat', 'Sound')

cat.makeSound()
//
}