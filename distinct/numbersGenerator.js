/**
 * @description -Distinct Coupon Number generate.

 *
 *  @description
 *
 *  @file           : distinctGenerator.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/
/*
 take first array with size 40 and stored  1 to 40 number into array chosen.

 */
function numbersGenerator() {
  var temp = 0;
  var newnumber = 0;
  var result = "";
  var chosen = new Array(40); // highest number required

  for (i = 1; i < 41; i++) { // initialise array - lowest number = 1
    chosen[i] = i;
  }

  for (i = 1; i < 41; i++) { // shuffle array
    newnumber = (Math.random() * 40) + 1;
    newnumber = parseInt(newnumber, 10);
    temp = chosen[i];
    chosen[i] = chosen[newnumber];
    chosen[newnumber] = temp;
  }

  for (var i = 1; i <= 10; i++) { // take first ten numbers from shuffled array
    result = result + " " + (chosen[i]);
  }
  document.write(result);

}
