function nextInSequence(arr, item) {
    // Only change code below this line
    let addItem = arr.push(item);
    let removeItem = arr.shift();
    return removeItem;
    // Only change code above this line
  }
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInSequence(testArr, 6)); // Change this
  console.log("After: " + JSON.stringify(testArr));