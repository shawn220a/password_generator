// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numberChar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Generate Password
function generatePassword() {
  let password = [];
  let passwordChars = [];
  let passwordText = "";

  let passLength = prompt("How long do you want the password?");
  if (passLength < 8) {
    alert("Password must be greater than 8 characters.");
  } else if (passLength > 128) {
    alert("Password must be less than 128 characters.");
  } else {
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

    for (i = 0; i < passLength; i++) {
      let passwordChoice = Math.floor(Math.random() * password.length);
      let passChar = password[passwordChoice];
      passwordChars.push(passChar);
    }

    for (x of passwordChars) {
      passwordText += x;
    }

    writePassword(passwordText);
  }
}

// Write password to the #password input
function writePassword(passwordText) {
  var password = passwordText;
  var passwordTextFinal = document.querySelector("#password");

  passwordTextFinal.value = password;

  // copyBtn.removeAttribute("disabled");
  // copyBtn.focus();
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function copyToClipboard() {
  // BONUS
}
