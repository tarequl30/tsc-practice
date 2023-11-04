// Function in typescript
//normal func
//arrow func
//Normal function
function addNumber(num1:number, num2: number){
    return num1 + num2
}

addNumber(2, 6)

//arrow Function
const addObject =(num1: number, num2: number) => num1 + num2; 

// Object --> method

const pooUser = {
    name: "mezba",
    balance : 0,
    addBalance(balance: number): string {
        return `This balance is : ${this.balance + balance} + balance`;
    }
}

const arr : number[] = [1,4,6]

const newArr: number[] = arr.map((elem : number) : number => elem*elem)
