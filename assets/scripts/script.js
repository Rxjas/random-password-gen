// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
console.log(generatePasswordw);
}

function writePassword() {
  console.log(writePassword)
  var password = generatePassword();

  console.log(password);
  var passwordText = document.querySelector("#password");

  console.log(passwordText);

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//criteria !,/,;,=... etc
    var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var symbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "[", "]", "^", "_", "{", "|", "}", "~"];

//What happens when you press button ------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!-------
// document.querySelector("#generate").addEventListener("click", startFunction)
//   // var passLength = prompt("please enter length you would like your password.")
//   function startFunction(){
//    var passlength = prompt("Please enter length you would like your password.");
//   }  

window.onload = ("hello and welcome")

// FIRST PROMPT
  var criteria = [];
  var endResult= "";
  console.log(criteria)
  var passLength = prompt("please enter length you would like your password.")

  if (passLength < 8 || passLength > 128){
    alert("Please choose a length greater than 8 characters, but less than 128 characters.");
  }
   // the rest of the statments
  else{

    if(confirm("Include upper-case letters?")){
      Array.prototype.push.apply(criteria, capLetter);
      // criteria.push(capLetter)
    }

    if(confirm("Include lower-case letters?")){
      Array.prototype.push.apply(criteria, letter);
      criteria.push(letter)
    }

    if(confirm("Include numbers?")){
      Array.prototype.push.apply(criteria, number);
      // criteria.push(number)
    }

    if(confirm("Include symbols?")){
      Array.prototype.push.apply(criteria, symbol);
      // criteria.push(symbol)
    }
    
    if(criteria == 0 || criteria == null){
      alert("--Invalid-- Criteria needed to generate password")
    }

    else{
      for(var i = 0; i < passLength; i++){
        var rand = Math.floor(Math.random() * criteria.length);
         endResult += criteria[rand];
        console.log(endResult)
      }
    }


  }
  
 


