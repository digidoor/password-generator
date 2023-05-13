// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}
function generatePassword()
{
	return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

