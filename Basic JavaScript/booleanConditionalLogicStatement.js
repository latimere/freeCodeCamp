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