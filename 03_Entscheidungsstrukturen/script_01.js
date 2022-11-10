"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // // Test | Logische Aussage

// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");


// if(ageJohn>ageMark)
// {
//     console.log("John ist älter.");
// }


// if (ageJohn > ageMark) 
// {
//     console.log("John ist älter.");
// } 
// else 
// {
//     console.log("John ist jünger.");
// }


// /************  Ternäre (ternary) Schreibweise ************/
//  console.log( (isJohnOlder) ? "John is older" : "Mark is older");


// if (isJohnOlder) 
// {
//     console.log("John ist älter.");
// } 
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt")
// }
// else 
// {
//     console.log("John ist jünger.");
// }

const firstName = "Jane";
let job;



job = "driver";     // .. fährt TAXI! / UBER
job = "diver";      // .. taucht im Rhein!
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
// job = "teacher";    // .. unterrichtet!
// job = "instructor";  // .. unterrichtet!




switch (job) {
    case "driver":
        console.log(firstName + " fährt TAXI! / UBER")
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!")
        break;
    case "artist":
        console.log(firstName + " malt ein Bild")
        break;
        
    default:
        console.log(firstName + " macht etwas anderes!")
        break;
}