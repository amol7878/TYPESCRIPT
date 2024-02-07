"use strict";
//program 7
let nameN = ["ram", "satish", "ramesh", "suresh", "laxman"];
console.log(nameN);
//program 8
let info2;
info2 = [777792992, "chinmay", "deshpande"];
//program
//admin
//Admin
//customer
//customer
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["customer"] = 1] = "customer";
    Roles[Roles["student"] = 2] = "student";
    Roles[Roles["manager"] = 3] = "manager";
})(Roles || (Roles = {}));
if (Roles.admin) {
    console.log('i work as admin');
}
if (Roles.customer) {
    console.log('i work as customer');
}
if (Roles.student) {
    console.log('i work as student');
}
if (Roles.manager) {
    console.log('i work as manager');
}
var direction;
(function (direction) {
    direction[direction["North"] = 0] = "North";
    direction[direction["South"] = 1] = "South";
    direction[direction["East"] = 2] = "East";
    direction[direction["West"] = 3] = "West";
})(direction || (direction = {}));
var StautusCode;
(function (StautusCode) {
    StautusCode[StautusCode["NotFound"] = 404] = "NotFound";
    StautusCode[StautusCode["Succeess"] = 200] = "Succeess";
    StautusCode[StautusCode["Created"] = 201] = "Created";
    StautusCode[StautusCode["Timeout"] = 503] = "Timeout";
})(StautusCode || (StautusCode = {}));
let chinmay;
chinmay = {
    firstName: "chinmay",
    lastName: "deshpande"
};
let audi = {
    modelNumber: 134,
    color: "red",
    type: "SUV"
};
let personOne = {
    firstName: "mayuri",
    lastName: 'katwe'
};
// program 12
function printAddress(code) {
    console.log('my address is ${code}');
}
printAddress('12');
printAddress(12);
//program 13
let account;
account = "saving";
account = "current";
//let x=10
//const x=10
