const userInput = require("readline");
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
uI.question("Enter a number for evaluation: \n\n", function(numberValue) {
    uI.close();
    function testElseIf(numberValue) {
        if (numberValue < 10) {                  //*NOTE the if statement's logic 
          return ("Less than or equal to 9");
        } else if (numberValue < 5) {               //The else if's condition will only be checked if the if statement above it did not run. 
          return ("Less than or equal to 5");       //If you enter a number less than 5 on this program, it will return "Less than or equal to 9" 
        } else  {                                   //Eventhough the else if statement is more accurate in that scenario    
            return ("Greater than or equal to 10");                //ORDER OF OPERATION (or execution) IS IMPORTANT HERE
        }
      }
      console.log(testElseIf(numberValue));
});