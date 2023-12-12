# Selecting from many options with Switch Statements

If you have many options to choose from, use a `switch` statement.
A `switch` statement tests a value and can have many `case` statements
which defines various possible values. Statements are executed from
the first matched case value until a break is encountered.

## Example

```javascript
//define the function caseInSwitch() with the variable val for an argument ie...caseInSwitch(val)
function caseInSwitch(val) {
    //define a variable as undefined that can be changed using let
  let answer = "";
  //switch the val variable to whatever value you are determining for each case *these are strictly evaluated with ===
  switch (val) {
    //val === 1 will "switch" the answer variable (or define it) as "alpha" string
    case 1:
    answer = "alpha"
    break;
    //val === 2 will "switch" the answer variable (or define it) as "beta" string
    case 2:
    answer = "beta"
    break;
    case 3:
    answer = "gamma"
    break;
    case 4: 
    answer = "delta"
    break;
}
  // Only change code above this line
  return answer;
}
//use console.log to display output in terminal....call function with argument val === 1
console.log(caseInSwitch(1));
```

case values are tested with strict equality (`===`). The break
tells JavaScript to stop executing statements. If the
break is omitted, the next statement will be executed.