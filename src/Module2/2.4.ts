{
    
    //constraints

    type vehicle = {
        bike : string,
        car: string,
        ship: string
    }

type Owner = "bike" | "car" | "ship" //manually

type Owner2 = keyof vehicle

const person1 : Owner2 = "bike"


const getPropertyValue = <x, y extends keyof x>(obj:x, key: y) => {
    return obj[key]
}


const user = {
    name: 'abid',
    age: 23,
    address : 'ctg'
}
const result1 = getPropertyValue(user,"name")



//user['name']



    //

}