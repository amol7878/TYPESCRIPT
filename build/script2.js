"use strict";
//program 1
//function addition(a,b){
//console.log(a+b)
//}
//addition('1','11')//111
// program 2
// function additionB(x,y){
//     if(typeof x=="number" && typeof y=="number"){
//         console.log(x+y)
//     }
//     else{
//         console.log("incorrect input")
//     }
// }
// additionB('2','4')
//program 3
function additionC(a, b) {
    console.log(a + b);
}
additionC(12, 4);
//program 4
let a = 10;
console.log(a);
let b = 20;
console.log(b);
//program 5
let first_name = "chinmay";
//let first_name:string="chinmay"
console.log(first_name);
//program 6
let canDrive = true;
//let canDrive:boolean=true
console.log(canDrive);
//program 7
let cities = ["pune", "mumbai", "nashik", "chennai", "kolkata"];
console.log(cities);
let numbers = [11, 22, 33, 44, 55, 66, 77, 88];
console.log(numbers);
let inFo = ["chinmay", "deshpande", 23];
inFo.push(45);
//program 8
let obj = {
    firstName: 'chinmay',
    lastName: 'deshpande'
};
let obj2;
obj2 = {
    firstName: "chinamy",
    lastName: "deshpande",
    age: 23
};
console.log(obj2);
//program 9
function mul(x2, y2) {
    console.log(x2 * y2);
}
mul(12, 4);
function mulB(x1, y1) {
    console.log(x1 * y1);
    return x1 * y1;
}
let q1 = mulB(2, 3);
//program 10
let fruit = ["apple", "mango", "banan", "grapes"];
fruit.forEach(function (el) {
    console.log(el.toUpperCase());
});
