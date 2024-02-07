"use strict";
//Single Inheritance
//Program 1
// class Father {
//     firstName: string
//     lastName: string
//     constructor(fn: string, ln: string) {
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(): void {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Son extends Father{
//     sname:string="chinmay"
// }
// let chinmayB=new Son("shirish","deshpande")
// console.log(chinmayB.firstName)
// console.log(chinmayB.lastName)
// console.log(chinmayB.sname)
// chinmayB.displayName()
//Program 2
// Single Inheritance
// class Father {
//     firstName: string
//     lastName: string
//     constructor(fn: string, ln: string) {
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayName(): void {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Son extends Father{
//     sname:string
//     constructor(fn: string, ln: string,sn:string){
//         super(fn,ln)
//         this.sname=sn
//     }
//     displaySName(): void {
//         console.log(this.sname+this.lastName)
//      }
// }
// let chinmayB=new Son("shirish","deshpande","chinmay")
// console.log(chinmayB.firstName)
// console.log(chinmayB.lastName)
// console.log(chinmayB.sname)
// chinmayB.displayName()
// chinmayB.displaySName()
//Program 3
// class GrandFather {
//     firstName: string
//     lastName: string
//     constructor(fn: string, ln: string) {
//         this.firstName = fn
//         this.lastName = ln
//     }
//     displayGName(): void {
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Father extends GrandFather{
//     fName: string
//     constructor(fn: string, ln: string,ffn:string){
//         super(fn,ln)
//         this.fName=ffn
//     }
//     displayFName():void{
//         console.log(this.fName+this.lastName)
//     }
// }
// class Son extends Father{
//      sname:string
//      constructor(fn: string, ln: string,ffn:string,sname:string){
//         super(fn,ln,ffn)
//         this.sname=sname
//      }
//      displaySName(): void {
//          console.log(this.sname+this.lastName)
//      }
// }
// let chinmayC=new Son("manohar","deshpande","shirish","chinmay")
// console.log(chinmayC.firstName)
// console.log(chinmayC.lastName)
// console.log(chinmayC.fName)
// console.log(chinmayC.sname)
// chinmayC.displayGName()
// chinmayC.displayFName()
// chinmayC.displaySName()
//Program 4
class Father {
    constructor(fn, ln) {
        this.firstName = fn;
        this.lastName = ln;
    }
    displayFName() {
        console.log(this.firstName + this.lastName);
    }
}
class Sister extends Father {
    constructor(fn, ln, sn) {
        super(fn, ln);
        this.sName = sn;
    }
    displayS() {
        console.log(this.sName + this.lastName);
    }
}
class Brother extends Father {
    constructor(fn, ln, bn) {
        super(fn, ln);
        this.bName = bn;
    }
    displayB() {
        console.log(this.bName + this.lastName);
    }
}
let chinmayD = new Brother("manohar", "deshpande", "chinmay");
console.log(chinmayD.firstName);
console.log(chinmayD.lastName);
console.log(chinmayD.bName);
chinmayD.displayFName();
chinmayD.displayB();
let chinmayE = new Sister("manohar", "deshpande", "Ananya");
console.log(chinmayE.firstName);
console.log(chinmayE.lastName);
console.log(chinmayE.sName);
chinmayE.displayFName();
chinmayE.displayS();
