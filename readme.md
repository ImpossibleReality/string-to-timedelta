# String to Timedelta

This library allows you to convert human-readable time strings (like `10 seconds, 5 minutes, 5 hours`) to milliseconds.

## How to use

This library includes both a `test()` function and a `parse()` function. The test function tests to see if it is a valid time string. Parsing converts the string to milliseconds. Here is a working example:

```javascript
strToTimedelta = require('string-to-timedelta')
string = '1d1h1s'

console.log(strToTimedelta.test(string))
// returns True
console.log(strToTimedelta.parse(string))
// returns 90001000 milliseconds
```