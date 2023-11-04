{
// Generic Type

type GenericArray<T> = Array<T>

//const rollNumber : number[] = [3,4,5]
const rollNumber :GenericArray<number> = [3,4,5]
    
const mentors : GenericArray<string> = ['x', 'c','f']

const boolArr : GenericArray<boolean> = [true, false, true]


const user : GenericArray<{name: string, age: number}> = [ 
{
    name: 'mezba',
    age: 10
},
{
    name: 'robol',
    age: 20
},
// {
//     role: 'admin',
//     age: 20
// }

]

const add = (x: number, y:number) => x+y

add(20,30)

//Generic Tuple
type GenericTuple<x,y> = [x , y]

const people: GenericTuple<string, string> = ['mr.x', "mr.y"]

const UserWithID: GenericTuple<number, {name: string, email: string}> = [123,{name: 'x', email: 'a@dhdj.com'}]

//
}