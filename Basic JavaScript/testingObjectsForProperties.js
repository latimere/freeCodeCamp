function checkObj(obj, checkProp) {
  // Only change code below this line
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh",
    city: "Seattle"
  };
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]
  }
  else {
    return "Not Found";
  }
  // Only change code above this line
}

console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));