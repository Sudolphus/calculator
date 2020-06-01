let num1 = "";
let num2 = "";
let operation = null;


$(document).ready(function() {
  $("#buttonOne").click(function() {
    if(operation === null){
      num1 = num1 + "1";
    } else {
      num2 = num2 + "1";
    };
  });

  $("#buttonTwo").click(function() {
    if(operation === null){
      num1 = num1 + "2";
    } else {
      num2 = num2 + "2";
    };
  });

  $("#buttonThree").click(function() {
    if(operation === null){
      num1 = num1 + "3";
    } else {
      num2 = num2 + "3";
    };
  });

  $("#buttonFour").click(function() {
    if(operation === null){
      num1 = num1 + "4";
    } else {
      num2 = num2 + "4";
    };
  });

  $("#buttonFive").click(function() {
    if(operation === null){
      num1 = num1 + "5";
    } else {
      num2 = num2 + "5";
    };
  });

  $("#buttonSix").click(function() {
    if(operation === null){
      num1 = num1 + "6";
    } else {
      num2 = num2 + "6";
    };
  });

  $("#buttonSeven").click(function() {
    if(operation === null){
      num1 = num1 + "7";
    } else {
      num2 = num2 + "7";
    };
  });

  $("#buttonEight").click(function() {
    if(operation === null){
      num1 = num1 + "8";
    } else {
      num2 = num2 + "8";
    };
  });

  $("#buttonNine").click(function() {
    if(operation === null){
      num1 = num1 + "9";
    } else {
      num2 = num2 + "9";
    };
  });

  $("#buttonZero").click(function() {
    if(operation === null){
      num1 = num1 + "0";
    } else {
      num2 = num2 + "0";
    };
  });

  $("#buttonAdd").click(function() {
    operation = "add";
  });

  $("#buttonSubtract").click(function() {
    operation = "subtract";
  });

  $("#buttonMultiply").click(function() {
    operation = "multiply";
  });

  $("#buttonDivide").click(function() {
    operation = "divide";
  });

  $("#buttonDecimal").click(function() {
    if(operation === null) {
      num1 = num1 + ".";
    } else {
      num2 = num2 + ".";
    }
  });

  $("#buttonEqual").click(function() {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    if(operation === 'add'){
        alert(number1+number2);
    } else if(operation === 'subtract') {
        alert(number1-number2);
    } else if(operation === 'multiply') {
        alert(number1 * number2);
    } else if(operation === 'divide') {
        alert(number1/number2);
    }
    num1 = "";
    num2 = "";
    operation = null;
  });
});