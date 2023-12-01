# Stand in Line

In Computer Science a `queue` is an abstract `Data Structure`
where items are kept in order. New items can be added at the back
of the `queue` and old items are taken off from the front of the `queue`.

## Instructions
 - Write a function `nextInSequence` which takes an `array`
(`arr`) and a `number` (`item`) as `arguments`.
 - Add the `number` to the `end of the array`.
 - Then remove the `first element of array`. The `nextInSequence` function
 should then return the element that was removed.

### Before

```javascript
function nextInSequence(arr, item) {
  // Your code here

  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInSequence(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
```

### After with modified code

```javascript
function nextInSequence(arr, item) {
  // Your code here

  let addItem = arr.push(item);

  let removeItem = arr.shift();

  return removeItem;  // Change this
}

// Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInSequence(testArr, 6)); 
console.log("After: " + JSON.stringify(testArr));

```

### Working through the presented challenge:

1. Add number at the end of the array. To achieve this use `.push()` to append the array
2. Remove the first element. To achieve this use `.shift()`
3. Return the element was removed. `return removeItem` After I setup the variable
with the `.shift()` method.