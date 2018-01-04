/**
 * @description -User Input and Replace String Template “Hello <<UserName>>, How are you?”

 *
 *  @file           : HelloMessage.js
 *  @overview       : reading in two-d arrays format.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/
function displayMessage(usermessage) {
  //usermessage length calculated
  var length=usermessage.length;
 //if l;ength is greater than 3
    if(length>3)
    {
    document.write("Hello " + usermessage + ", how are you?");
    }
    else
    {
     alert("The field cannot contain more than 3 characters!")
    }
}
