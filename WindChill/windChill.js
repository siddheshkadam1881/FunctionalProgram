
/******************************************************************************
 *  Execution       :   1. default node         cmd> node PrimeChecker.js
 *                      2. if nodemon installed cmd> nodemon PrimeChecker.js
 *
 *  @description    :program WindChill that takes two double command­line arguments temparature
                     and velocity and prints the wind chill.
 =
 *
 *  @file           : windChill.js
 *  @module         : windchill calculation using temparature and velocity
 *  @author         : siddheshwar kadam
 *  @version        : 1.0

 ******************************************************************************/


function windchillcalculate()
{
  /* temparature and velocity are taken from user then calculate speed and
   all value are store into windChill formula */
  var temperature=parseInt(document.getElementById("text1").value);
  var velocity=parseInt(document.getElementById("text2").value);
  var speed= parseFloat(Math.pow(velocity,0.16));
  var windChill=parseFloat(35.74+0.6215*temperature+((0.4275*temperature)-35.75)*speed);
  document.write(windChill);

}
