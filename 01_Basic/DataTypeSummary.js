//primitive datatypes

// 7 type: String, boolean, number, null, undefined, BigInt, Symbol

const score = 100
const scoreValue = 10.8 //number

const isLoggedIn = false //boolean
const outsideTemp = null //null

let userEmail; //undefined

const id = Symbol("321") //symbol
const anotherId = Symbol("321")

console.log(id === anotherId)

const bigNUmber = 354687894798479496n //bigInt


//Reference (Non primitive)

//Array, Objects, Functions

const name = ["masyud","minhaz","munir"] //array

let myObj = {
    name: "masyud",
    age: 24,
}

const myFunction = function(){
    console.log("Assalamualikum")
}

console.log(typeof bigNUmber)