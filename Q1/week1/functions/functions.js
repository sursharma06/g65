
function yourName(firstName, lastName) {
  var myName = 'Surbhi';
  return firstName + ' ' + lastName;
}
//have to invoke the function for it to run in the iterm
var fullName = yourName('Surbhi', 'Sharma');
console.log(myName); //inside the functional scope so undefined returns in the console.
