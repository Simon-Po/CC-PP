
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));


function output(o) {
    console.log(o);
}


function getSentence(arr,char) 
{

    let out = "";
    for (let i = 0; i < arr.length ; i++) {
        if (i != arr.length -1 )
        {
            out = out + arr[i].trim() + " ";
        }else 
        {
            out = out + arr[i];
        }

    }
    switch (char) 
    {
        case "S":
            out = out + ".";
            break;
        case "Q":
            out = out + "?";
            break;
        case "E":
            out = out + "!";
            break;
    }
    return out;

}

