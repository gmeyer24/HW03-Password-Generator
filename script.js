var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // parseInt turns the user's input, which is a string in a prompt, into a number. Need to compare numbers for a min/max password length.
  function generatePassword() {
    var minLength = parseInt(
      prompt("How many characters would you like your password to be?")
    );
    var maxLength = 128;

    // isNaN stands for is not a number. User cannot move forward if a number is not entered.
    if (isNaN(minLength) || minLength < 8 || minLength > maxLength) {
      alert(
        "Please enter a valid password length between 8 and 128 characters."
      );
      return;
    }

    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumbers = confirm("Include numeric values?");
    var includeSpecialChars = confirm("Include special characters?");

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var specialChars = '!@#$%^&*()_+{}[]|\:;"<>,.?/~';

    var allChars = "";
    var password = "";

    // use (+=) to concatenate or join the sets together based on the users selection. allChars = lowercaseChars + uppercaseChars + etc..
    if (includeLowercase) {
      allChars += lowercaseChars;
    }
    if (includeUppercase) {
      allChars += uppercaseChars;
    }
    if (includeNumbers) {
      allChars += numberChars;
    }
    if (includeSpecialChars) {
      allChars += specialChars;
    }

    if (allChars === "") {
      alert("Please select at least one character type for your password.");
      return allChars;
    }

    // Generate the password with for loop because there is a limit to the loop. Use while if no limit. The number of chars to be generated is known
    // Math.floor rounds down number to nearest whole number. Won't exceed 128 or go below 8.
    // Math.random generates random decimal between 0 and 1. Times by total amount of characters creates range within the specificed numbers

    for (let i = 0; i < minLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
