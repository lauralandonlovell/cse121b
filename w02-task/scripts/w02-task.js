/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Laura Landon";
let currentYear = "2023";
let profilePicture = "images/Lauracopy.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
var imageElement = document.createElement("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = "<strong>$(fullName)</strong>";
yearElement.textContent = "2023";
imageElement.setAttribute("src", profilePicture);
imageElement = element.setAttribute("alt", "Profile image of ${fullName}");

/* Step 5 - Array */
const foods = new Array("Tomato Feta Pasta", "Curry Pizza", "Clementines", "See's Candy Raspberry Dark Chocolate Truffle", "Pot Stickers", "Egg Rolls");
console.log(foods);
/*trying loop*/
foods.forEach((food)=> console.log(food));
foods.push("Spaghetti");
foods.innerHTML += "<br>${favFoods}";
console.log(foods, [0]);
foods.pop([0]);








