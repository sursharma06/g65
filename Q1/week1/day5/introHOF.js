//Function Declaration
// function myFunc() {
//   console.log('Good morning g65!');
// }
//
// myFunc();

//Function Expression
// console.log(myFunc2); // will return undefined
// var myFunc2 = function () {
//   console.log('TGIF');
// };
//
// myFunc2();//if this variable invocation appears before the expression, it will return an error.

setInterval(function () {alert('HI!');}, 3000);

var annoy = function () {
  var now = new Date();
  alert(now);
};

setInterval(annoy, 3000);//built in JS function that takes in a function as an argument.
// var func = function () {
//   console.log('Hi Mom!!');
// };
//
// function higherOrder(done) { //accepts another function as an argument
//   done();
// }
//
// higherOrder(func); //this function invokes the done()
