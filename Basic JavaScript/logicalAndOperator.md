# Comparisons with the Logical And Operator

Sometimes you will need to test more than one thing at a time. The logical and operator (`&&`) returns `true` if and only if the operands to the left and right of it are true.

The same effect could be achieved by nesting an `if` statement inside another `if`.


## Instructions

Use `&&` operator and only one `if` statement.

Enter a number between the values of 25 and 50

## Example

```javascript
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
```
