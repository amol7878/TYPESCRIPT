//program 7

let nameN:string[]=["ram","satish","ramesh","suresh","laxman"]
 console.log(nameN)


 //program 8

 let info2:[number,string,string];
 info2=[777792992,"chinmay","deshpande"]


 //program

 //admin
//Admin
//customer
//customer

enum Roles{
    admin,
    customer,
    student,
    manager
}

if(Roles.admin){
    console.log('i work as admin')
}

if(Roles.customer){
    console.log('i work as customer')
}

if (Roles.student){
    console.log('i work as student')
}

if(Roles.manager){
    console.log('i work as manager')
}

enum  direction{
    North,
    South,
    East,
    West
}


enum StautusCode{
    NotFound=404,
    Succeess=200,
    Created=201,
    Timeout=503
}

//program 9
type person={
    firstName:string,
    lastName:string
}

let chinmay:person;

chinmay={
    firstName:"chinmay",
    lastName:"deshpande"
}

//program 10

type car={
    modelNumber:number,
    color:string,
    type:string
}

let audi:car={
    modelNumber:134,
    color:"red",
    type:"SUV"
}

//program 11

interface PersonC{
    firstName:string
    lastName:string
}

let personOne:PersonC={
    firstName:"mayuri",
    lastName:'katwe'
}

// program 12

function printAddress(code:string|number){
    console.log('my address is ${code}')
}

printAddress('12')
printAddress(12)

//program 13

let account:"saving"|"current"

account="saving"
account="current"

//let x=10

//const x=10


