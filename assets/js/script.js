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
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbol = [
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

//prompt for password elements
function generatePassword() {
  //set length

  var passLength = parseInt(
    prompt(
      "Enter the length of your password. Please enter a number between 8 and 128 characters."
    )
  );
console.log(passLength);
  //alert if password length is less than 8 or greater than 28
  if (isNaN(passLength)){
    window.alert("You must choose a number between 8 and 128 characters.");
    return generatePassword();
  } 
  if (passLength > 128 || passLength < 8 || passLength.length===0 || passLength===""|| passLength==="NaN"|| passLength===null) {
    window.alert("You must choose a number between 8 and 128 characters.");
    return generatePassword();
  }
  
  //confirms to idenfy character criteria
  var confirmLower = window.confirm("Do you want to include lowercase letters?");

  var confirmUpper = window.confirm("Do you want to include uppercase letters?");

  var confirmNum = window.confirm("Do you want to include numbers?");

  var confirmSymbols = window.confirm("Do you want to include symbols?");

  //alert if user did not select at least one criteria
  if (!confirmLower && !confirmUpper && !confirmNum && !confirmSymbols) {
    window.alert("You must select at least one character type.");
    return generatePassword();
  }

  //define random array components
  var charArray = [];

  if (confirmLower) charArray = charArray.concat(lowerAlpha);
  if (confirmUpper) charArray = charArray.concat(upperAlpha);
  if (confirmNum) charArray = charArray.concat(number);
  if (confirmSymbols) charArray = charArray.concat(symbol);

  //create password by randomly selecting components of the created array
  var password = "";

  for (var i = 0; i < passLength; i++) {
    var randomChar = charArray[Math.floor(Math.random() * charArray.length)];
    password = password + randomChar;
  }

  return password;
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
