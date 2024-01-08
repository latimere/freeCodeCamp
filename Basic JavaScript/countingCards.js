let count = 0;

function cc(card) {
  // Only change code below this line
var action = '';
switch (card) {
  case 2:
  count = count + 1
  case 3:
  count = count + 1
  case 4:
  count = count + 1
  case 5:
  count = count + 1
  case 6:
  count = count + 1
  case 10:
  count = count - 1
  case 'J':
  count = count - 1
  case 'Q':
  count = count - 1
  case 'K':
  count = count - 1
  case 'A':
  count = count - 1
  break;
}
if (count > 0) action = "Bet";
else (action = "Hold");
  return {count, action};
  // Only change code above this line
}
//console.log(cc(2, 3, 4, 5, 6,));
console.log(cc(7, 8, 9));
//console.log(cc(10, 'J', 'Q', 'K', 'A'));
//console.log(cc(3, 7, 'Q', 8, 'A'));