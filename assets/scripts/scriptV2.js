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


function generatePassword(){
  // Empty the result everytime the function is ran to not just add to previous one. 
  criteria = [];
  var endResult = "";

  // The length user wants the password
  const passLength = prompt("Please enter length you would like your password between 8 - 128 characters.");


  // if the password length is short or too long then...
  if (passLength < 8 || passLength > 128){
    alert("Please choose a length greater than 8 characters, but less than 128 characters; or enter number.");
  }
   // Otherwise if, passLength is correct then...
  else {
    if(confirm("Include upper-case letters?")){
      Array.prototype.push.apply(criteria, capLetter);
    }
    if(confirm("Include lower-case letters?")){
      Array.prototype.push.apply(criteria, letter);
    }
    if(confirm("Include numbers?")){
      Array.prototype.push.apply(criteria, number);
    }
    if(confirm("Include symbols?")){
      Array.prototype.push.apply(criteria, symbol);
    }
  }
  //If nothing added to criteria then...
  if(criteria[0] == null || 0){
    alert("--Invalid-- Criteria needed to generate password")
    return endResult = '';
  }

  //the math to randomize the items in criteria array
      for(var i = 0; i < passLength; i++){
        var rand = Math.floor(Math.random() * criteria.length);
        endResult += criteria[rand];
      }
      //return put outside loop since it stops the loop once it reaches it
      return endResult;
    };
    
    // Function that runs when button is pressed
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password"); 
      passwordText.value = password;
    };
  
 


