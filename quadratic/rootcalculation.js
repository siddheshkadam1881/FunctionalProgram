


/**

 *
 *  @description   Quadratic.java to find the roots of the equation a*x*x + b*x + c.
                   the equation is x*x, hence there are 2 roots.
 *
 *  @file           : rootcalculation.js
 *  @overview       : root calculate here..
 *  @author         : siddheshwar kadam
 *  @version        : 1.0

 *
 ******************************************************************************/



function rootcalculation() {
  var number1 = parseInt(document.getElementById("text1").value);
  document.getElementById("demo1").innerHTML = number1;

  var number2 = parseInt(document.getElementById("text2").value);
  document.getElementById("demo2").innerHTML = number2;
  var number3 = parseInt(document.getElementById('text3').value);
  document.getElementById("demo3").innerHTML = number3;
  var delta = (number2 * number2 - 4 * number1 * number3);
  var power = 200;
  var root1 = parseFloat((-number2 - Math.sqrt(power)) / (2 * number1));
  var root2 = parseFloat((-number2 + Math.sqrt(power)) / (2 * number1));

  document.write(root1);
  document.write("<br>");
  document.write(root2);
}
