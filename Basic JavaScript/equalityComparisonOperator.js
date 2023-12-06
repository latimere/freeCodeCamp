//define variable with require() function
const userInput = require("readline");
//define variable using objectName.method() for user input in terminal
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
//use variable as objectName.method() to display message and evaluate in an if statement
uI.question("Enter a number to check if it is equal to the number 10: \n\n", function(numberValue) {
    uI.close();
    if (numberValue == 10) {
        console.log("Yes, it is Equal to 10");
     }
    if (numberValue != 10) {
     console.log("No, it isn't Equal to 10");
    }
});