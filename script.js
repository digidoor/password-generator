// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

// Write password to the #password input
function writePassword() {
	var number = parseInt( prompt("pick a number or something") );
	var password = generatePassword();
	password += number;
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}
function generatePassword()
{
	return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

