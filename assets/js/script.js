// Assignment code here

//define variables
var lowerAlpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperAlpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "<",
  ">",
  "/",
  "?",
  "|",
  "~",
];

// function to generate a random numeric value
//var randomNumber = function (min, max) {
  //var num = Math.floor(Math.random() * (max - min) + min);

  //return num;
//};

//prompt for password elements

//insert function for click action here
function generatePassword() {
  // function to set length
  var passLength = "";

  while (
    passLength === "" ||
    passLength === null ||
    passLength < 8 ||
    passLength > 128
  ) {
    passLength = prompt(
      "Enter the length of your password. Please enter a number between 8 and 128 characters."
    );
  }

  //confirm for lowercase letters
    var confirmLower = window.confirm(
      "Do you want to include lowercase letters?"
    );

    //confirm for uppercase letters
    var confirmUpper = window.confirm(
      "Do you want to include uppercase letters?"
    );

    //confirm for numbers
    var confirmNum = window.confirm(
      "Do you want to include numbers?"
    );

    //confirm for symbols
    var confirmSymbols = window.confirm(
      "Do you want to include symbols?"
    );
    
    //alert if no options selected and loop back
    if(!confirmLower && !confirmUpper && !confirmNum && !confirmSymbols) {
      window.alert("You must select at least one character type.");
      return(passwordCriteria);
    };
  };

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

//passwordCriteria();
