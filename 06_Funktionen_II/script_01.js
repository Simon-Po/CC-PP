
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // Ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/



// Module calculator test:
// agreement : "+","-","*",":"

startApp()

//start the application

function startApp() {
    out(calculator(getNumber(1),getNumber(2),getOp()));
}

function getNumber(num){
    return Number(prompt(`Number ${num}: `))
}

function getOp(){
    return prompt("Op?: ")
}

//module calculator uses switch to assign opperants to the right func
function calculator(a,b,op) {

    switch (op) {
        case "+": // Addition 
            return add(a,b);
        case "-": // Subtraction
            return sub(a,b);
        case "*": // Multiplication
            return multi(a,b);
        case ":": // Division            
        case "/": // Division
            return div(a,b);   
        default:    // Default case throw ERROR
            return "Something went wrong!";
    }


}

//module div returns a / b test:
// out(div(2,3));
// out(div(7,-3));
// out(div(2,0));
// out(div(0,2));
function div(a,b) {
    return (b != 0) ? a / b : " Division by zero";
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

    if (typeof outputData == "number") {
        console.log("The result is: " + outputData)
    } else {
        console.error("ERROR: " + outputData)
    }


} 