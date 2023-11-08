{
// type guard
//typeOf - type guard

type Union = string | number;

const add = (param: Union, param2 : Union) : Union => {

    if(typeof param === 'number' && typeof param2 === 'number') {
 return param + param2
    } else{
        return param.toString() + param2.toString()
    }
}

const result = add(2, 3)
console.log(result)


// inGuard

// type NormalUser = {
//     name: string
// }
// type AdminUser = {
//     name: string,
//     role: "admin"
// }

// const getUser = (user : NormalUser | AdminUser) => {
//     if('role' in user){
        
//         console.log(`i'm ${user.name} my role is ${user.role}`)
//     } else{
//         console.log(`${user.name}`)
//     }
// }

// const normalUser : NormalUser = {
//     name: 'normal'
// }
// const adminUser : AdminUser = {
//     name: 'admin',
//     role : 'admin'
// }


// getUser(normalUser)


//
}