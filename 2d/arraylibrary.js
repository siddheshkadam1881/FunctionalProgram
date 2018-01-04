
/**
 * @description -A library for reading in 2D arrays of integers, doubles, or booleans from
standard input and printing them out to standard output.

 *  Purpose         : reading in two-d  arrays.
 *
 *  @description
 *
 *  @file           : arraylibrary.js
 *  @overview       : reading in two-d arrays format.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/
function arraylibrary()
{
   /* create array row  with his size=2  */
	 var myArray = new Array(2);
	 var i = 0;
	 var J = 0;
     var k=1;

     for (i = 0; i < 10; i++)
     {
			/* create columns with his size=10 */
      myArray[i]=new Array(2);
     }
      /* assing value two particular loaction */

       for (i = 0; i < 10; i++)
      {
 	    for (j = 0; j < 2; j++)
	    {
	      			
	      myArray[i][j]=prompt("don't  put  blank,Please enter name " + k);
          k++;
	    }
		     document.write("<br/>");
      }
         /*
		  myArray[0][0]="siddhesh";
		  myArray[0][1]="abhijit";
		  myArray[1][0]="Shubham";
		  myArray[1][1]="aniket";
		  myArray[2][0]="nilesh";
		  myArray[2][1]="priya";
		  myArray[3][0]="alpesh";
		  myArray[3][1]="hitendtra";
		  myArray[4][0]="swapnil";
		  myArray[4][1]="sunil";
		  myArray[5][0]="sushant";
		  myArray[5][1]="akshay";
		  myArray[6][0]="ravindra";
		  myArray[6][1]="mahesh";
		  myArray[7][0]="ajit";
		  myArray[7][1]="guruprit";
		  myArray[8][0]="ranjeet";
		  myArray[8][1]="amar";
		  myArray[9][0]="abhishek";
		  myArray[9][1]="johny"; */

       for (i = 0; i < 10; i++)
      {
 	    for (j = 0; j < 2; j++)
	    {
				/* reading array here */
	      document.write(myArray[i][j]+ "&emsp;");
	    }
		     document.write("<br/>");
      }
}
    arraylibrary();//calling to js main function

