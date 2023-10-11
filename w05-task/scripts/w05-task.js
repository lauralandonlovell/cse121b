/* W05: Programming Tasks */
/* Declare and initialize global variables */
const templesElement = document.getElementById("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples)  
temples.forEach((temple) => 
{
    document.createElement("article")
    document.createElement()
    console.log(temple);
});

/* async getTemples Function using fetch()--This site helped me understand the basic syntax better dmitripavlutin.com/javascript-fetch-async-await/*/
async function fetchTemples()
{
    const gettingDisplayTemples = await fetch("/displayTemples");
    return await waitForTemples.json();
}

/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
