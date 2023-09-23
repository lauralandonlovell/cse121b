/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Laura Landon-Lovell";
let currentYear = "2023";
let profilePicture = "images/lauraimage.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
var imageElement = ("img");
imageElement.src = profilePicture;

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = "2023";
imageElement.src = profilePicture;
imageElement.setAttribute = ("alt", `"Profile image of ${fullName}"`);

/* Step 5 - Array */
let foods = ["Tomato Feta Pasta", "Curry Pizza", "Clementines", "See's Candy Raspberry Dark Chocolate Truffle", "Pot Stickers", "Egg Rolls"];
//console.log(foods);
/*trying loop*/
foods.forEach((food)=> console.log(food));
foods.push("Spaghetti");
foodElement.innerHTML += `"<br>${foods}<br>"`;
console.log(foods[0]);
foods.pop([0]);








