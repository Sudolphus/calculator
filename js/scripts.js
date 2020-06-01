$(document).ready(function() {
  $("#buttonOne").click(function() {
    alert(1);
  });
});

const add = function(number1, number2) {
	return number1+number2;
}

const subtract = function(number1, number2) {
  return number1-number2;
}

const multiply = function(number1, number2) {
  return number1 * number2;
}

const divide = function(number1, number2) {
  return number1 / number2;
}
