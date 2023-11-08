{
    // access modifires
    
    class BankAc{
       readonly id: number;
        name: string;
        balance : number;
        constructor(id : number, name: string, balance: number){
            this.id = id,
            this.name = name,
            this.balance = balance
        }
    }
    
    const poorUser = new BankAc(11,'alex', 22);
    poorUser.name = 'kabul'
    
    
    //
    }