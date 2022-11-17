"use strict";

/* Die Satzbau-Maschine | Arrays */

 
/*** 01. Funktionalität mit Einzelparametern */


// 02. Theorie Array


// let arr;
// //arr = new Array(); // erzeugung eines Arrays durch einen Constructor
// arr = [];
// arr = [2,7,11,4];
// arr = [false,true,false];
// arr = ["ich","bin","max","mütze"]

// out(arr[arr.length-1])
// out(arr.length)

// --> "Ich bin Max Mütze." test:
//out(getSentence("ich","bin","max","mütze")); 
//out(getSentence("ich","bin","der","coole","max","mütze"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    
    let str     =  word1 + GAP + 
                   word2 + GAP +
                   word3 + GAP +
                   word4 + GAP +
                   word5 + GAP + 
                   word6 + 
                   PUNKT;
    return str;
}
const GAP   = " ";
const PUNKT = ".";



out(getSentenceArr(["ich","bin","der","coole","max","mütze"]));

function getSentenceArr(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = str +  arr[i] + GAP;
        
    }
    return str + PUNKT
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function out(outputStr) {
    console.log(outputStr);
}


