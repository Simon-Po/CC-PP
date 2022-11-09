"use strict";
// https://www.w3schools.com/js/js_strict.asp
/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

// let firstName; // Deklaration der Variable
// firstName = "Simon"; // Wertzuweisung 
// console.log(firstName); // Konsolenausgabe

// let lastName = "Pohl";
// console.log(firstName + " " + lastName);


// 03 Deklaration + Wertzuweisung II 

// let firstName, lastName;
// firstName = prompt("Bitte Vornamen eingeben: ");
// lastName = prompt("Bitte Namen eingeben: ");
// console.log(firstName + " " + lastName);

// let test;
// // test = "Hi";
// test = 2;
// // test = true;

// console.log("Datentyp: " + typeof test); // Typeof Gibt den typen der vaiable als String aus
// console.log("Inhalt: " + test);

// let test = "Hi";
// test = "Hallo";


// console.log("Inhalt: " + test);


// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung
ageJohn = 25;
ageMark = 30;

let date = new Date();
console.log(date);
let year = date.getFullYear();
// let year = new Date.getFullYear();


birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

console.log("birthYearJohn: " + birthYearJohn + "\n" 
            + "birthYearMark: " + birthYearMark);

