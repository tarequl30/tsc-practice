{
    // Mapped

const arrOfNum : number[] = [1,3,5]

// const arrOFStr : string[] = ["1","3"]

const arrOfStr : string[] = arrOfNum.map(number => number.toString())

console.log(arrOfStr)

type AreaNumber = {
    height: number,
    width: number
};

type AreaStr = {
    [key in keyof AreaNumber] : string
}


// const area1 = AreaStr<{}>

type Height = AreaNumber['height'] //lookup type

// type AreaStr = {
//     height: string,
//     width: string
// }


    //
}