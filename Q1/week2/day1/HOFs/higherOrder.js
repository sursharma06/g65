// function awesome(arr) {
//   arr(); //we know to pass in a function when awesome is invoked because in the body arr has parens.
// }
//
// awesome(function () { // if anything else other than a function is passed in as an argument,it will show an error.
//   //console.log('Hello');
//   alert("You've got mail"); //or set this equal to a var and pass it inside awesome()
// });
setInterval(function () {
  alert('I believe in you!');
}, 3000);
