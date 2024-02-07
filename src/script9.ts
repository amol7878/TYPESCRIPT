//  // Program

// let x:unknown="hello"
// console.log((x as string))


// //program 2

// let x1:number=4;
// console.log((x1 as string).length)//4

// // program 3

// //9766909110
// //'9766909110'
let x2:unknown="hello"
console.log((<string>x2).length)

// //program 4

function addition<s1,s2>(x:s1,y:s2):[s1,s2]{
    return [x,y]
}


let r1=addition<string,number>("chinmay",7)
let r2=addition<string,string>("chinmay","hello")
let r3=addition<number,number>(7,7)
let r4=addition<number,string>(7,"chinmay")


// program 1

interface Vehical{
    wheel:number
    average:number
}

// let audiA:Vehical={
//     wheel:3,
//     average:4
// }

let audiC:Partial<Vehical>={};
audiC.wheel=19;

interface CarB{
    make:string;
    model:string;
    mileage?:number;   //? is optional
}

//with option

// let bmw:CarB = {
//     make:"q1",
//     model:"q11"
// }

let bmw:Required<CarB> = {
    make:"q1",
    model:"q11",
    mileage:34
}


//Record

let student:Record<string,number>={
    'Alice':32,
    'BOb':23

}


interface Human{
    height:number,
    age:number
}

let amit:Omit<Human,"height">={
    age:24
}