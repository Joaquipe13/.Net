'use strict';

//La declaración de la función es hoisteada es decir que a los efectos prácticos es como
// si se declarara al principio del script lo que permite ser llamada antes de su definición

hoisting('this is hoisting');
//noHoisting("this isn't hoisting"); //uncomment to see the error

function hoisting(printText) {
  console.log(printText);
}

const noHoisting = function (printText) {
  console.log(printText);
};