
/**
 * @description -counts thenumber of triples that sum to exactly 0.
 **/
 /*
 *  Purpose         : sum to exactly 0.
 *
 *  @description
 *
 *  @file           : arraylibrary.js
 *  @overview       : counts number of triples that sum to exactly 0.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0 */

/* create array with his maximum size */

function triplesum() {
  var sum1 = 0;
  var inputArray = [];
  var size = 5; 

  /* accept value from user using prompt box and store in temparray and
   then spilit into another array */
  var temparray = prompt('Enter Element 5 number seperated by (coma)\,');
  var inputArray = temparray.split(",");

   //chechiking user input is valid or not
  if (inputArray.length != size) {
    return triplesum()
  }
   // add 3 number and stored into sum varible

  for (var i = 0; i < size; i++) {
    sum1 = sum1 + parseInt(inputArray[i]);
  }
  findThreeNumbers(inputArray, size, sum1);

  /**/
  //Print the array in the console.
  console.log(inputArray);
}

function findThreeNumbers(inputArray, size, sum1) {
  var i = 0;
  var j = 0;
  var k = 0;

  // Fix the first element as A[i]
  for (i = 0; i < size - 2; i++) {
    // Fix the second element as A[j]
    for (j = i + 1; j < size - 1; j++) {
      // Now look for the third number
      for (k = j + 1; k < size; k++) {
        if (inputArray[i] + inputArray[j] + inputArray[k] == sum1) {
          document.write("Triplet is" + inputArray[i], inputArray[j], inputArray[k]);
          return true;
        }
      }
    }
  }

  // If we reach here, then no triplet was found
  document.write("no triplet was found");
  return false;
}
