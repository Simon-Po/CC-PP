
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole :
*/


// module sub returns int a - b test:
// out(sub(2,3));
// out(sub(7,-3));
// out(sub(2,0));
function sub(a,b) {
    return a - b;
}

// returns a+b as an int test:
// out(add(35,34));
// out(add(-3,2));
// out(add(2,0));
function add(a,b) {
    return a + b;
}

// module: console output
function out(outputData) {
    console.log(outputData);
}