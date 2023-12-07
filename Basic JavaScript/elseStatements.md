# Else Statements

When a condition for an `if` statement is `true`, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an `else` statement, an alternate block of code can be executed.

```javascript
///////////////////////////////////////////////////////
function testElse(val) {                            //<-----Define testElse() Function with Variable Argument
  let result = "";                                 //                  function(argument) { object }                       
  if (val > 5) {                                  //
    result = "Bigger than 5";                    //
  } else                                        //                    
    return "5 or Smaller";                     //                       
  return result;                              //
}                                            //
//////////////////////////////////////////////

////////////////////////////////////////////
testElse(4);                             //<-----Call testElse() Function with Argument value of 4
```