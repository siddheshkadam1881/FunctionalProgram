
/**
 * @description -counts thenumber of triples that sum to exactly 0.
 **/
 /*
 *  Purpose         : This program takes a command­line argument N and prints a table of the
powers of 2 that are less than or equal to 2^N.



 *  @file           : powertwo.js
 *  @overview       : check the leap year or not.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0 */

function checkleap(userInput) {
  //get number from user
  var number = parseInt(userInput);
  //create power array
  var power1 = [];
  var i = 0;
  var year = 0;
  if (number > 31) {
    alert("please enter less than 32"); //user enter < 32 number
  } else {
    function pow1() {
      for (i = 0; i < number; i++) {
        power1[i] = Math.pow(2, i); // calculate the power of 2

      }
      return power1;
    }
    document.write(pow1()); //show the power
  }

  var length1 = power1.length;
  document.write("<br>");
  for (i = 0; i < length1; i++) {
    if (((power1[i] % 4 == 0) && (power1[i] % 100 != 0)) || (power1[i] % 400 == 0)) {
      document.write(power1[i] + " is a leap year <br>"); //checking leap year
    } else {
      document.write(power1[i] + " is not a leap year <br>");
    }
  }
}
