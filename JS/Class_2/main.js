console.log("Class 2 of JS");
var age; // variable declaration
age = 40;  // variable initialization
console.log("My age is:" + age);
age = 10;
console.log(age); // 40 or 10

var originalNum = 23;
var numToBeAdded = 5;
var newNum = originalNum + numToBeAdded;
console.log(newNum);

var x = 5;
x = x + 10;
console.log(x);

var a = "30";
var b = a + 20; // string concatenation
console.log(b);

var checkAlert = 40;
console.log(typeof checkAlert);
alert(typeof checkAlert);

// Variable naming conventions
// var my name is = "John"; // invalid
// var 5thFeb = "Wednesday"; // invalid
// var var = 10; // invalid
var _myNameIs = "John"; // valid
var $myNameIs = "John"; // valid

var isValidName = "New York"; // camel case (recommended)
var is_valid_name = "New York"; // snake case
var IsValidName = "New York"; // pascal case

