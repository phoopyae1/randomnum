const readline = require("readline-sync");

console.log("Numbers of RN");
// Enter the number
let a = Number(readline.question());
var x;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


for (let i = 0; i < a; i++) {
    console.log(getRandomInt(a))

}