"use strict";

/* Die Satzbau-Maschine | Arrays */

 
/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
//out(getSentence("ich","bin","max","mütze")); 
out(getSentence("ich","bin","der","coole","max","mütze"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const gap   = " ";
    const punkt = ".";
    let str     =  word1 + gap + 
                   word2 + gap +
                   word3 + gap +
                   word4 + gap +
                   word5 + gap + 
                   word6 + 
                   punkt;





    return str;
}




// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function out(outputStr) {
    console.log(outputStr);
}


