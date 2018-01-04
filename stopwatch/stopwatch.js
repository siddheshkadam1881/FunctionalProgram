

/******************************************************************************

 *  Purpose         :  a Stopwatch Program for measuring the time that elapses between
                      the start and end clicks.
 *
 *  @description
 *
 *  @file           : stopwatch.js
 *  @overview       : a Stopwatch Program for measuring the time that elapses between
                      the start and end clicks.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
   var myVar;
   var time=-1;
   function myStopFunction()
    {
       //  myClock(myTimer);
      document.getElementById("t1").innerHTML = "time between start and stop " + time;
      time=-1;
      clearInterval(myVar);
    }
   function startClock()
    {
    //start clock here ahere each 1 second time is moving
     clock();
     myVar = setInterval(function(){ clock() }, 1000);
   }
   function clock()
    {
     time++;
	  var date = new Date();
     var currenttime = date.toLocaleTimeString();
     document.getElementById("demo").innerHTML =currenttime;
    }
