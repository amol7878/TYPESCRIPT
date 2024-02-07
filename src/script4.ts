//program 1


class PersonA{
    name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName():string{
        return this.name
    }
}
let amol=new PersonA("Amol Rao")
console.log(amol)
let nm=amol.displayName()
console.log(nm)

//program  2

class personc{
    public name:string
    constructor(nm:string){
        this.name=nm
    }
    displayName():string{
        return this.name
    }
}

let chinmayA=new personc('amol')
console.log(chinmayA.name)
let qq=chinmayA.displayName()
console.log(qq)

//program 3

class PersonD{
    private name:string
    constructor(nm:string){
        this.name=nm
    }
    public displayName():string{
        this.greet()
        return this.name
    }
    private greet(){
        console.log('hello i am learning js')
    }
}

let amolE=new PersonD("amoD")
//console.log(amolE.name)Private
let q2=amolE.displayName()
console.log(q2)
//amolE.greet() Private


//Program 4
class PersonE{
    constructor(public name:string,public lname:string){}
}

let poorva=new PersonE("poorva","vyas")
console.log(poorva)
console.log(poorva.name)
console.log(poorva.lname)