# Use Conditional Logic with If Statements

`If` statements are used to make decisions in code. The keyword `if`
tells JavaScript to execute the code in the curly brackets
under certain conditions, defined in the parentheses. These conditions
are known as `Boolean` conditions because they may *only be true or false*.

When the condition evaluates to `true`, the program *executes
the statement inside the curly brackets*. When the `Boolean` condition
evaluates to `false`, the *statement inside the curly brackets will not execute*.


## Example

```javascript
//Change this variable to true or false to test the boolean conditional if statement within the trueOrFalse function
testVariableBooleanCondition = false //Change to true or false
//define function and take variable as argument to test it's boolean condition
function trueOrFalse(testVariableBooleanCondition) {
    //if statement to test if condition is true
    if (testVariableBooleanCondition == true) { 
        return "Yes, that variable's boolean condition is true"; //within these curly brackets is the code that is executed when the if the true boolean condition is met
    }
    //if statement to test if condition is false
    if (testVariableBooleanCondition == false) {
        return "No, that variable's boolean condition is false"; //within these curly brackets is the code that is executed when the if the false boolean condition is met
    }
}
console.log(trueOrFalse(testVariableBooleanCondition));
```
## Explaination / Pseudocode

### Step 1

define the `variable` as `true` or `false`

### Step 2

define `function` that takes the `variable` as an argument and it's `Boolean` condition 

### Step 3

test the `variable` and it's `Boolean` condition for `true` or `false` using `if` statements

## Step 4

print results ie.... the `return` value from either `if` statement is evaluated within the function and the returns are printed (from the correspponding `Boolean` condition)