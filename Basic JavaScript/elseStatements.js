///////////////////////////////////////////////////////
function testElse(val) {                            //<-----Define testElse() Function with Variable Argument
  let result = "";                                 //                  function(argument) { object }                       
  if (val > 5) {                                  //
    result = console.log("Bigger than 5");       //
  } else                                        //                    
    return console.log("5 or Smaller");        //                     
}                                             //
///////////////////////////////////////////////

////////////////////////////////////////////
testElse(4);                             //<-----Call testElse() Function with Argument value of 4
//////////////////////////////////////////