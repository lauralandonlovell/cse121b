/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
add = function(number1, number2) 
{
    return number1 + number2; 
}
addnumbers = function(add1, add2)
{
  let addNumber1 = Number(document.querySelector("add1").value);
  let addNumber2 = Number(document.querySelector("add2").value);
  document.getElementById("sum").innerHTML = sum.value; 
}
document.getElementById("#addNumbers").addEventListener("click", addNumbers);
/*This is not in the function block because it has to listen, and when it's in the function block it is in the wrong scope for listening.*/

/* Function Expression - Subtract Numbers */
subtract = function (number1, number2)
{
    return number1 - number2;
}
subtractNumbers = function(subtract1, subtract2)
{
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.getElementById("#difference").value = subtract(subtractNumber1, subtractNumber2);
}
document.getElementById("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = (factor1, factor2) => factor1 * factor2;
let multiplyNumbers = (factor1,factor2) => factor1 * factor2;

/* Open Function Use - Divide Numbers */
let divide = (dividend,divisor) => dividend / divisor;
let divideNumbers = (dividend1,dividend2) => dividend1 / dividend2;



/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById("#array").value;

/* Output Odds Only Array */
ArrayList<numbersArray> odds;
for (int i = -1; i < odds.size(); i++);
{
    console.log(i);
}

/* Output Evens Only Array */
numbersArray = 
for (int i = 0; i < evens.size(); i++);
{
    console.log(i);
}

/* Output Sum of Org. Array */
numbersArray.reduce((sum, number) => sum + number); 
/* Output Multiplied by 2 Array */
numbersArray.reduce((sum, double ) => sum * 2);
/* Output Sum of Multiplied by 2 Array */
numbersArray.map(number => number * 2);
