# Golf Score

In the game of golf each hole has a `par` meaning the average number of
`strokes` a golfer is expected to make in order to sink the ball in a
hole to complete the play. Depending on how far above or below par
your `strokes` are, there is a different nickname.

Your function will be passed `par` and `strokes` `arguments`. Return the
correct `string` according to this table which lists the strokes
in order of priority; `top (highest) to bottom (lowest)`:

Strokes | Return
--- | ---
1 | "Hole-in-one!"
<= par - 2 | "Eagle"
par - 1	| "Birdie"
par	| "Par"
par + 1	| "Bogey"
par + 2	| "Double Bogey"
>= par + 3 | "Go Home!"

`par` and `strokes` will always be numeric and positive.

### Code

```javascript
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
//if par >= 1;{
//return names [0];
//} else if 
//
// if strokes is equal to 1, return first item in names array 
if (strokes == 1) return names [0];
// else check if strokes - par is less than or equal to -2, return second item in names array
else if ((strokes - par) <= -2) return names[1];
else if ((strokes - par) == - 1) return names[2];
else if (strokes == par) return names[3];
else if ((strokes - par) == 1) return names[4];
else if ((strokes - par) == 2) return names [5];
else if ((strokes - par) == 3) return names[6];
else return names[6];
  // Only change code above this line
}

golfScore(5, 4);
```