// Assignment code here
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const special = "!#$%&()*+-:;<=>?@^_|~";

let selections = "";

function generatePassword() {
  var pswdLength = window.prompt(
    "How many characters would you like your password to have? (minimum 8)"
  );
  if (pswdLength >= 8 && pswdLength <= 128) {
  } else {
    window.alert("please enter a valid number between 8-128");
    return 'Please Try Again';
  }
  var lowerCase = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (lowerCase === true) {
    selections += alphabet;
  }
  var upperCase = window.confirm(
    "Would you like to include uppercase letters?"
  );
  if (upperCase === true) {
    selections += alphabetCap;
  }
  var specialChar = window.confirm(
    "Would you like to include special characters?"
  );
  if (specialChar === true) {
    selections += special;
  }
  var numbs = window.confirm("Would you like to include numbers?");
  if (numbs === true) {
    selections += numbers;
  }; if (!lowerCase && !upperCase && !specialChar && !numbs
  ) {
      window.alert("please pick at lease one character type. Try again");
      return 'Please Try Again';
  } else {
    let randomPassword = "";

    for (let i = 0; i < pswdLength; i++) {
      var randomIndex = Math.floor(Math.random() * selections.length);
      randomPassword += selections[randomIndex];
    }
  
    return randomPassword;

  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
