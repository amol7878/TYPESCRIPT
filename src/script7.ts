//Program 1

// interface worldBank{
//     save():number
//     loan():number
// }

// class SBI implements worldBank{
//     save(): number {
//         console.log('i am save method from SBI')
//         return 100
//     }
//     loan():number {
//         console.log("i am loan method from SBI ")
//         return 100
//     }
//     branchName(){
//         console.log("Amanora Branch")
//     }
// }

// class PNB implements worldBank{
//     save(): number {
//         console.log("I am save method from PNB")
//         return 23
//     }
//     loan(): number {
//         console.log("I am loan method from PNB")
//         return 44
//     }
// }

// class BOI implements worldBank{
//     save(): number {
//         console.log("I am save method from BOI")
//         return 45
//     }
//     loan(): number {
//         console.log("I am loan method from BOI")
//         return 55
//     }
// }

// let SBIa=new SBI()

// let PNBa=new PNB()

// let BOIa=new BOI()


//Program 2

// interface Student {
//     displayFullName: () => string
//     displayAge: () => number
// }

// interface Teacher {
//     salary: () => number
// }

// class PersonZ implements Student, Teacher {
//     displayFullName(): string {
//         return "chinmay Deshpande"
//     }
//     displayAge(): number {
//         return 23
//     }
//     salary(): number {
//     return 787
//     }

// }

// let amolZ=new PersonZ()
// console.log(amolZ)
// console.log(amolZ.displayAge())
// console.log(amolZ.displayFullName())
// console.log(amolZ.salary())

//Program 3

interface Address {
    displayAddress():string
}

class GrandFather{
    firstName:string
    lastName:string
    constructor(fn:string,ln:string){
        this.firstName=fn
        this.lastName=ln
    }
    displayGF(){
        console.log(this.firstName+this.lastName)
    }
}
class FatherN extends GrandFather implements Address{
    fname: string
    constructor(fn:string,ln:string,fname:string){
        super(fn,ln)
        this.fname=fname
    }
    displayFN(){
        console.log(this.fname+this.lastName)
    }
    displayAddress(): string {
        return "A-302 gardenia Socity pune"
    }
}

let ninad=new FatherN("ninad","dani","chinmay")
console.log(ninad)
console.log(ninad.displayFN())
console.log(ninad.displayAddress())
