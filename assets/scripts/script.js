// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//criteria !,/,;,=... etc
    var criteria = [];
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "[", "]", "^", "_", "{", "|", "}", "~"];
    var endResult = "";


function generatePassword(){
  

  // The length user wants the password
  var passLength = prompt("please enter length you would like your password.")


  // if the password length is short or too long then...
  if (passLength < 8 || passLength > 128){
    alert("Please choose a length greater than 8 characters, but less than 128 characters; or enter number.");
  }
   // Otherwise if, passLength is correct then...
  else if (passLength > 8 || passLength < 128){
    if(confirm("Include upper-case letters?")){
      Array.prototype.push.apply(criteria, letter);
      // console.log(criteria)
    }
    if(confirm("Include lower-case letters?")){
      Array.prototype.push.apply(criteria, capLetter);
      // console.log(criteria)
    }
    if(confirm("Include numbers?")){
      Array.prototype.push.apply(criteria, number);
      // console.log(criteria)
    }
    if(confirm("Include symbols?")){
      Array.prototype.push.apply(criteria, symbol);
      // console.log(criteria)
    }
  }
  //If nothing added to criteria then...
  if(criteria == null || criteria == 0){
    alert("--Invalid-- Criteria needed to generate password")
  }

  //the math to randomize the items in criteria array
    console.log(criteria)

    
      for(var i = 0; i < passLength; i++){
        var rand = Math.floor(Math.random() * criteria.length)
        // console.log(criteria[rand])
        endResult += criteria[rand];
        // console.log(endResult)
      }
      //return put outside loop since it stops the loop once it reaches it
      return endResult
    
    }

    function writePassword() {

      var password = generatePassword();
    
      var passwordText = document.querySelector("#password");
    
      passwordText.value = password;
    
    }
  
 


