// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Write password to the #password input
function writePassword() {
	var choices = getChoices();
	//var number = parseInt( prompt("pick a number or something") );
	var password = generatePassword(choices);
	//password += choices;
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}
function getChoices()
{
	var length = parseInt( prompt("How long?") );
	if( length > 128 || length < 8 )
	{
		alert("Between 8 and 128, my dude");
		length = prompt("How long?");
	}

	var lower = prompt("Lower case characters?");
	var upper = prompt("Upper case characters?");
	var numeric = prompt("Numbers?");
	var special = prompt("Special characters?");
	return { lower, upper, numeric, special };
}
function generatePassword(userChoices)
{
	return JSON.stringify(userChoices);
	//return "password" + userChoices;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

