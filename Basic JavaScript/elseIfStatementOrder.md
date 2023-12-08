# Order in Else If Statements

Order is important in `if`, `else if` statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

ie... the first condition to be met will be executed if there are two conditions that can be met within the statements by the argument.

####Example 1

```javascript
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
foo(0)
```

The result from Example 1: `"Less than one"`



####Example 2

```javascript
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
bar(0)
```

The result from Example 2: `"Less than two"`


Although these are both essentially the same logical paths for the argument variable `x` to pass through, the order dictates which logical path is returned first.