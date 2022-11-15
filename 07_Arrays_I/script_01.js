"use strict";

/* Die Satzbau-Maschine | Arrays */

 
/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//out(getSentence("ich","bin","max","mütze")); 
out(getSentence("ich","bin","der","coole","max","mütze"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP   = " ";
    const PUNKT = ".";
    let str     =  word1 + GAP + 
                   word2 + GAP +
                   word3 + GAP +
                   word4 + GAP +
                   word5 + GAP + 
                   word6 + 
                   PUNKT;





    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function out(outputStr) {
    console.log(outputStr);
}


