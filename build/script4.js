"use strict";
//program 1
class PersonA {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let amol = new PersonA("Amol Rao");
console.log(amol);
let nm = amol.displayName();
console.log(nm);
//program  2
class personc {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        return this.name;
    }
}
let chinmayA = new personc('amol');
console.log(chinmayA.name);
let qq = chinmayA.displayName();
console.log(qq);
//program 3
class PersonD {
    constructor(nm) {
        this.name = nm;
    }
    displayName() {
        this.greet();
        return this.name;
    }
    greet() {
        console.log('hello i am learning js');
    }
}
let amolE = new PersonD("amoD");
//console.log(amolE.name)Private
let q2 = amolE.displayName();
console.log(q2);
//amolE.greet() Private
//Program 4
class PersonE {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
    }
}
let poorva = new PersonE("poorva", "vyas");
console.log(poorva);
console.log(poorva.name);
console.log(poorva.lname);
