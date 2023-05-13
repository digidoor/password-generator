// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

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
	while( length > 128 || length < 8 )
	{
		alert("Between 8 and 128, my dude.");
		length = prompt("How long?");
	}

	var lower = confirm("Include lowercase characters?");
	var upper = confirm("Include uppercase characters?");
	var numeric = confirm("Include numbers?");
	var special = confirm("Include special characters?");
	if( !lower && !upper && !numeric && !special)
	{
		alert("You must select at least one character type.");
		return getChoices();
	}
	return { length, lower, upper, numeric, special };
}
function generatePassword(userChoices)
{
	var passwordChars = determineRange(userChoices);
	return passwordChars;
	//return "password" + userChoices;
}
function determineRange(userChoices)
{
	var chars = "";
	if( userChoices.lower )
		chars += lowercase;
	if( userChoices.upper)
		chars += uppercase;
	if( userChoices.numeric )
		chars += numeric;
	if( userChoices.special )
		chars += special;
	return chars;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

