/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.
*/

// You can work with multidimensional arrays by Array[Index][SubIndex]

function largestOfFour(arr) {
  // You can do this!

  var result = [];
  

  for (var i = 0; i < arr.length; i ++){
   var largestNumber = arr[i][0];

   for(var j = 0; j < arr[i].length; j++){
     if (arr[i][j] > largestNumber ) {
       largestNumber = arr[i][j];
     }
   }

   result[i] = largestNumber;
  }

  return result;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
