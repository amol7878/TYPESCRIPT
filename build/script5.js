"use strict";
//  Program 1
// class PersonX{
//     msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     displayMsg(){
//         console.log(this.msg)
//     }
// }
// let al=new PersonX("i am learning js")
// console.log(al)
// al.displayMsg()
//program 2
// class PersonX{
// private msg:String
// constructor(msg:string){
//     this.msg=msg
//    }
//    public displayMsg(){
//     console.log(this.msg)
//     return this.msg
//    }
// }
// let al=new PersonX("i am learning js")
// //console.log(al)
// let a11=al.displayMsg()
// console.log(a11)
// //Program 3
// class PersonX{
//     private msg:string
//     constructor(msg:string){
//         this.msg=msg
//     }
//     private displayMsg(){
//         console.log(this.msg)
//         return this.msg
//     }
//     public calldisplay(){
//         this.displayMsg()
//     }
// }
// let al=new PersonX("i am learning js")
// console.log(al)
// al.calldisplay()
//program 4
// class StudentA{
//     // firstName:string
//     // lastName:string
//     // constructor(fn:string,ln:string){
//     //     this.firstName=fn
//     //     this.lastName=ln
//     // }
//     constructor(protected firstName:string,public lastName:string){
//     }
//     display():string{
//         return this.firstName+this.lastName
//     }
// }
// class Teacher extends StudentA{
//     salary:number
//     constructor(firstName:string,lastName:string,salary:number){
//         super(firstName,lastName)
//         this.salary=salary
//     }
// }
// let chin =new Teacher("chinmay","deshpande",90)
// //console.log(chin.firstName)
// // //protected ,only available in class or inherted class 
// console.log(chin.lastName)
// console.log(chin.salary)
//readonly
class ProfessorA {
    constructor(pr) {
        this.professor = pr;
    }
}
let ak = new ProfessorA("maths");
console.log(ak);
