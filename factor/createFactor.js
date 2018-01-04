
/**
 *

 *  Purpose         : Computes the prime factorization of N using brute force.
 *
 *  @description
 *
 *  @file           : createFactor.js
 *  @overview       : Computes the prime factorization of N using brute force.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/

function createFactor(userInput) { //take number from user
  var number = parseInt(userInput);
  // for each potential factor
  var factor = 0;
  for (factor = 2; factor * factor <= number; factor++) {
    // if factor is a factor of n, repeatedly divide it out
    while (number% factor == 0) {
      document.write("<br>");
      document.write(factor + " ");
      number= number / factor;
    }

    // if biggest factor occurs only once, n > 1
    if (number > 1) {
      document.write("<br>");
      document.write(number);
    } else {
      document.write("<br>");
      document.write();
    }
  }
}
