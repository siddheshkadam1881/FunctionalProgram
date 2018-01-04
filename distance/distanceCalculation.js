/**
 * @description -Euclidean distance from the point (x, y) to the origin (0, 0).

 *  Purpose         : Euclidean distance from the point (x, y) to the origin (0, 0).
 *
 *  @description
 *
 *  @file           : distanceCalculation.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/

function distanceCalculate() {
  /* take two number from user and multiplly number again store itself. */
  var number1 = parseInt(prompt("Please enter your name", "first number"));
  var number2 = parseInt(prompt("Please enter your name", "second number"));
  var number2 = parseInt(number1 * number1);
  var number2 = parseInt(number2 * number2);
  /* math.sqrt function are used here according condtion */
  var distance = parseInt(Math.sqrt(number2 + number1));
  document.write("Distance from x and y to (0,0) = " + distance);
}
