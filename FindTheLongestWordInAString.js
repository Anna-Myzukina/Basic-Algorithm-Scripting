/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

*/

function findLongestWordLength(str) {
  var word = str.split(' ');
  var maxWord = 0;

  for (var i = 0; i < word.length; i++){
    if (word[i].length > maxWord){
      maxWord = word[i].length;
    }
  }

  return maxWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
