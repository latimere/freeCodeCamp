const userInput = require("readline");
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
uI.question("Enter a number for evaluation: \n\n", function(numberValue) {
    uI.close();
    function testElseIf(numberValue) {
        if (numberValue < 5) {
            return "Tiny"
          } else if (numberValue < 10) {
            return "Small"
          } else if (numberValue < 15) {
            return "Medium"
          } else if (numberValue < 20) {
            return "Large"
          } else (numberValue >= 20)
            return "Huge";
            // Only change code above this line
          }
      console.log(testElseIf(numberValue));
});