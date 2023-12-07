const userInput = require("readline");
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
uI.question("Enter a number between the numbers 25 and 50 \n\n", function(numberValue) {
    uI.close();
    if (numberValue > 25 && numberValue < 50) 
        return console.log("The number you entered was between 25 and 50");
    return console.log("The number you entered was not between 25 and 50");;
});