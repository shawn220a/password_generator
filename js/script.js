// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTextFinal = document.querySelector("#password");
var copyText = document.querySelector("#password");

const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "\"", "'", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "[", "]", "\\", "_", "`", "{", "}", "|", "~", " "];

let password = [];
let passwordChars = [];
let passwordText = "";

// Get user input on what characters to use for password
function userInput() {
  let lower = confirm("Would you like lower case characters?");
  let upper = confirm("Would you like upper case characters?");
  let number = confirm("Would you like numbers?");
  let special = confirm("Would you like special case characters?");

  if (lower === true) {
    for (x of lowerCaseChar) {
      password.push(x);
    }
  }
  if (upper === true) {
    for (x of upperCaseChar) {
      password.push(x);
    }
  }
  if (number === true) {
    for (x of numberChar) {
      password.push(x);
    }
  }
  if (special === true) {
    for (x of specialChar) {
      password.push(x);
    }
  }
  return password;
}

// Create the password
function randomizePassword(passLength, password) {
  for (i = 0; i < passLength; i++) {
    let passwordChoice = Math.floor(Math.random() * password.length);
    let passChar = password[passwordChoice];
    passwordChars.push(passChar);
  }

  for (x of passwordChars) {
    passwordText += x;
  }
  return passwordText;
}

// Generate Password
function generatePassword() {
  let passLength = prompt("How long do you want the password?");
  if (passLength < 8) {
    alert("Password must be greater than 8 characters.");
  } else if (passLength > 128) {
    alert("Password must be less than 128 characters.");
  } else {

    password = userInput();
    passwordText = randomizePassword(passLength, password);

    writePassword(passwordText);
  }
}

// Write password to the #password input
function writePassword(passwordText) {
  var password = passwordText;

  passwordTextFinal.value = password;
}

// Copy Text to clipboard
function copyToClipboard() {
  copyText.select();
  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Add event listener to copy button
document.querySelector("#copy").addEventListener("click", copyToClipboard);


