/*
Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a ... ending.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

We need to reduce the length of the string or truncate it if it is longer than the given maximum lengths specified and add ... to the end.
If it is not that long then we keep it as is.

Relevant Links
String.prototype.slice()


//We need to reduce the length of the string or truncate it if it is longer than
the given maximum lengths specified and add ... to the end. If it is not that long then we keep it as is.
*/

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
