// Assignment code here

//PROMPT USER FOR NUMBER OF CHARACTERS IN THE PASSWORD AND RETURN THE RESULT
var charLength = function(){
  var length=prompt("Choose the number of characters for your password");

  // VALIDATE THAT THE NUMBER IS BETWEEN 8 AND 128 AND PROMPT USER TO ENTER A VALID NUMBER IF IT DOES NOT MEET CRITERIA
  if(length<8 || length>128){
    alert("Please enter a number between 8 and 128");
    charLength();
  }
  else{
    return length;
  }
}//End of charLength function

//PROMPT USER TO CONFIRM USE OF LOWER-CASE LETTERS IN THE PASSWORD AND RETURN TRUE OR FALSE BASED ON THE RESPONSE
var lowerCaseConfirm = function(){
  var lowerCaseTrueFalse=window.confirm("Include lower-case letters?");
  if(lowerCaseTrueFalse){
    return true;
  }
  else{
    return false;
  }
}//End of lowerCaseConfirm function

//PROMPT USER TO CONFIRM USE OF UPPER-CASE LETTERS IN THE PASSWORD AND RETURN TRUE OR FALSE BASED ON THE RESPONSE
var upperCaseConfirm = function(){
  var upperCaseTrueFalse=window.confirm("Include upper-case letters?");
  if(upperCaseTrueFalse){
    return true;
  }
  else{
    return false;
  }
}//End of upperCaseConfirm function

//PROMPT USER TO CONFIRM USE OF NUMBERS IN THE PASSWORD AND RETURN TRUE OR FALSE BASED ON THE RESPONSE
var numberConfirm = function(){
  var numberTrueFalse=window.confirm("Include numbers?");
  if(numberTrueFalse){
    return true;
  }
  else{
    return false;
  }
}//End of numberConfirm function

//PROMPT USER TO CONFIRM USE OF SPECIAL CHARACTERS IN THE PASSWORD AND RETURN TRUE OR FALSE BASED ON THE RESPONSE
var specialConfirm = function(){
  var specialTrueFalse=window.confirm("Include special characters?");
  if(specialTrueFalse){
    return true;
  }
  else{
    return false;
  }
}//End of specialConfirm function

// VALIDATE THAT AT LEAST ONE PARAMETER HAS BEEN SELECTED AND RETURN "FALSE" IF ALL PARAMETERS HAVE BEEN LEFT BLANK

var parameterValidation = function(){
  if(!useLowerCase && !useUpperCase && !useNumbers && !useSpecials){
    return false
  }
  else{
    return true
  }
}//end of parameterValidation function

// BUILD ARRAY TO STORE RANDOMLY GENERATED CHARACTERS FOR PASSWORD

var myArray=[];

// CALL FUNCTION FOR PASSWORD LENGTH 

var passwordLength=(charLength());
console.log("password length: "+passwordLength);

// CALL FUNCTIONS FOR UPPER CASE, LOWER CASE, NUMBERS, AND SPECIAL CHARACTERS AND VALIDATE THAT AT LEAST ONE CHARACTER TYPE HAS BEEN SELECTED

do{
var useLowerCase=(lowerCaseConfirm());
console.log("lower case: "+useLowerCase);

var useUpperCase=(upperCaseConfirm());
console.log("upper case: "+useUpperCase);

var useNumbers=(numberConfirm());
console.log("numbers: "+useNumbers);

var useSpecials=(specialConfirm());
console.log("special characters: "+useSpecials);

var acceptParameters=(parameterValidation());
console.log("Parameters: " + acceptParameters);

if(!parameterValidation()){
  alert("Please select at least one character type");
}
}
while(!acceptParameters){
}
//end of do/while loop

// DEFINE PASSWORD COMPONENTS: LOWER CASE LETTERS, UPPER CASE LETTERS, NUMBERS AND SPECIAL CHARACTERS

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = [0,1,2,3,4,5,6,7,8,9];
var special = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~'];

// FOR LOOP TO SELECT RANDOM VALUES FROM PARAMETER ARRAYS SPECIFIED BY USER

for (i=1; ; i++) {
  if (useLowerCase){
    var randomLowerCase = Math.floor(Math.random()*(lowerCase.length));
    myArray.push(lowerCase[randomLowerCase]);
    if(myArray.length>=passwordLength){
      break;
    }
  }

  if(useUpperCase){
    var randomUpperCase = Math.floor(Math.random()*(upperCase.length));
    myArray.push(upperCase[randomUpperCase]);
    if(myArray.length>=passwordLength){
      break;
    }
  }

  if(useNumbers){
    var randomNumber = Math.floor(Math.random()*(number.length));
    myArray.push(number[randomNumber]);
    if(myArray.length>=passwordLength){
      break;
    }
  }

  if(useSpecials){
    var randomSpecial = Math.floor(Math.random()*(special.length));
    myArray.push(special[randomSpecial]);
    if(myArray.length>=passwordLength){
      break;
    }
  }
}//end for loop




var generatePassword = function(){
  myArray.sort(()=>Math.random()-0.5);
  return (myArray.join(''));
}

var password=generatePassword();
console.log("myPassword: "+password);




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
