{

    //Spread Operator
    // Rest Operator
    //Destructuring
    
  const bros: string[] = ['mirza','Firoz']
  const bros1: string[] = ["tanmay", "rahat"]


  bros.push(...bros1)


  const mentors1 = {
    typescript: "mezba",
    redux: "mir",
    dbms: "mizan"
  }

  const mentors2 = {
    prisma: 'firoz',
    next: "tanmay",
    cloud: "Nahid"
  }


const mentorList = {
    ...mentors1,
    ...mentors2
}


//Rest Operator

const greetFriends = (...friends: string[]) =>{
    // console.log(`Hi ${friend1}`)

    friends.forEach((friend: string) => console.log(`hi ${friend}`))
}

greetFriends("abul", "babul", "kabul", "bubul")

}