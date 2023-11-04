{
//Interface
//Alias
type User1 = {
    name: string;
    age: number
}
interface User2 {
    name: string,
    age: number
}

type userWithRole1 = User1 & {role: string}

interface userWithRole2 extends User1 {
    role: string
}


const user1: userWithRole2 = {
    name: "tareq",
    age: 10,
    role: 'manager'
}

type rollNumber = number

//Interface


const user3: User2 = {
    name: "tareq",
    age: 10
}


//arr
//Js- Object, arr = Object, Func = Object
//type
type Roll1 = number[]

//interface
interface Roll2 {
    [ index : number] : number
}

const rollNumber1: Roll2 = [1,2,3]

//func
//Alias
type Add2 = (num1: number, num2: number) => number

//interface in func
interface Add1 {
    (num1:number, num2: number) : number
}
const add:Add1 =(num1:number, num2:number) => num1+num2
//   
}