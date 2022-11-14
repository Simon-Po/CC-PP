
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole :
*/





//module div returns a / b test:
out(div(2,3));
out(div(7,-3));
out(div(2,0));
out(div(0,2));
function div(a,b) {
    return (b != 0) ? a / b : "Error: Division by zero";
}

//module: multi returns in a * b test:
// out(multi(2,3));
// out(multi(7,-3));
// out(multi(2,0));
function multi(a,b) {
    return a * b;
}

// module: sub returns int a - b test:
// out(sub(2,3));
// out(sub(7,-3));
// out(sub(2,0));
function sub(a,b) {
    return a - b;
}

// module: add returns int a + b test:
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