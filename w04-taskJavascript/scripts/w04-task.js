/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = 
{
    name: "Laura",
    photo: "w04-taskJavascript/images/lauraimage.png",
    favoriteFoods: 
    [
        "Tomato Feta Pasta", "Curry Pizza", "Clementines", "See's Candy Raspberry Dark Chocolate Truffle", "Pot Stickers", "Egg Rolls"
    ],
    hobbies:
    [
        "Learning French", "Cooking", "Practicing Piano", "Learning different styles of embroidery", "Learning to do Patchwork Quilting", "Learning to Sew Clothing", "Learning how to create and manage webpages", "Learning different coding languages"
    ],
    placesLived:
    [

    ],   
    

}
const places = 
{
    place: 
    [
        "Los Angeles, CA", "Chatsworth, CA", "Citrus Heights, CA", "Bountiful, UT", "Logan, UT", "Nibley, UT", "Providence, UT", "Farr West, UT", "Harrisville, UT", "Maricopa, AZ", "Chabanais, France"
    ],
    length: 
    [
        "1 yr", "1 yr", "12 yrs", "5 yrs", "8 yrs", "3 yrs", "3 months", "10 yrs", "3 yrs", "4 yrs", "1 yr and counting"
    ]
}
myProfile.placesLived.push(places.place);
document.querySelector("#name").textContent = myProfile.name;
document.querySelector("img").setAttribute("src", "w04-taskJavascript/images/lauraimage.png");
document.querySelector("img").setAttribute("alt", "Laura");
myProfile.favoriteFoods.forEach(food => 
    {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    });
document.querySelector("#hobbies").textContent = myProfile.hobbies;
myProfile.hobbies.forEach(hobby => 
    {
        let ul = document.createElement("ul");
        ul.textContent = hobby;
        document.querySelector("#hobbies").appendChild("ul");
    });
document.querySelector("#places-lived").textContent = myProfile.placesLived;
myProfile.placesLived.forEach(place =>
    {
        let DataList = document.createElement("dl");
        dl.textContent = place;
        document.querySelector("#places-lived").append("dl");
    });





/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


