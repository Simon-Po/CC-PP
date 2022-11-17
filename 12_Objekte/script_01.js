
/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");

// // nested arrays
// arr =   [
//                 ["Ich","bin","Max"],
//                 ["Ich","bin","Moritz"]
//         ];

// output(arr[0][2]);
// output(arr[1][2]);
// output("------------");

// // nested loops
// for (let i = 0; i < arr.length; i++) {
//        for (let j = 0; j < arr[0].length; j++) { 
//         output(arr[i][j]);          
//        }   
// }

/***** Objekte 1 Daten/Funktionen *******/



let person = {


                firstName: "Simon",
                familyName: "Pohl",
                salary: [120000,160000],
                permission:true,
                sayHello:
                        function(){
                                return "Hi, ich bin " + this.firstName
                        }

}


// output(person);
// output(person.sayHello());


// ---------Hierarchie--------------


const baikal = {
                value:"10m",
                deep:{
                        deeper: {
                                deepest: "Das Licht - auf 1642m!"
                        }
                }


        }

output(baikal.value);
output(baikal.deep.deeper.deepest);









/** Ausgabe */
function output(outputData) {
        console.log(outputData);
}