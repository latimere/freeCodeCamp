# Else If Statements

If you have multiple conditions *(3 or more possible logical paths)* that need to be addressed, you can chain `if` statements together with `else if` statements

```javascript
const userInput = require("readline");
const uI = userInput.createInterface({
    input: process.stdin,
    output: process.stdout
});
uI.question("Enter a number for evaluation: \n\n", function(numberValue) {
    uI.close();
    function testElseIf(numberValue) {
        if (numberValue >= 10) {
          return ("Equal to or greater than 10");
        } else if (numberValue <= 5) {
          return ("Equal to or smaller than 5");
        } else  {
            (numberValue > 5 && numberValue < 10)
            return ("Between 5 and 10");
        }
      }
      console.log(testElseIf(numberValue));
});
```