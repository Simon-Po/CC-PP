/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

let nameP = prompt("Wie ist ihr Name?: ");
let age = Number(prompt("Was ist ihr alter?: "));

switch (true) {
    case (age <= 5):
        console.log(nameP + " trinkt Milch." );
        break;

    case (age <= 12 && age >= 6):
        console.log(nameP + " trinkt Saft." );
        break;
        
    case (age <= 17 && age >= 13):
        console.log(nameP + " trinkt Cola." );
        break;
        
    case (age >= 18):
        console.log(nameP + " trinkt Wein." );
        break;

}
