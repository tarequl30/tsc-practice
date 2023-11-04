{
//Func in Generic type
const createArr = (param:string) :string[] => {
    return [param]
}

const createArrWithGeneric = <T>(param: T) : T[] => {
    return [param]
}
const result1 = createArr('Bangladesh')

const resultGeneric = createArrWithGeneric<string>('bangladesh')

type User = {id: number, name:string}

const restGenericObj = createArrWithGeneric<User>({id: 222, name:"mr.x"})

//
}