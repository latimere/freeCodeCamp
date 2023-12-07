const userInput = require("readline");
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
uI.question("Enter a number between the numbers 10 and 30 \n\n", function testNumberValue(numberValue) {
    uI.close();
    if (numberValue < 10 || numberValue > 30)
        return console.log("The number you entered is outside the values of 10 and 30");
    return console.log("The number you entered is inside the values of 10 and 30");;
});