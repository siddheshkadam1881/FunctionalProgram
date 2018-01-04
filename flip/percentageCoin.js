/**
 * @description -Flip Coin and print percentage of Heads and Tails

 *
 *
 *  @file           : percentageCoin.js
 *  @overview       : Flip Coin and print percentage of Heads and Tails
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/
/*
take input from user and stored into number.
*/
function percentageCalculation(userInput) {
var Number =parseInt(userInput);
/*
create three varible for looping purpose.
*/
var i;
var tails=0;
var head=0;
for (i=0;i<Number;i++)
{
   if(Math.random()>0.5)
   {
    tails++;   // value of random number generator than 0.5  stored into j
   }
   else
    {
    head++;   // value of random number generator than 0.5  stored into head
    }
}

 document.write("percentage of tails"+(tails/Number)*100);
 document.write("percentage of head"+(head/Number)*100);
}
