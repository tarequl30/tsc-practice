//Reference --> Object 
{


const user : {
    company: 'Programming Hero' //type == Literal Types
    // readonly company: string  //readonly property it can't be write
    mainName: string;
    secondName?: string; //Optional 
    surName: string;
} = {
    company: 'Programming Hero',
    mainName : 'First Name',
    // secondName :'second Name',
    surName: 'Surname'
}

user.mainName= 'rabbi'


}