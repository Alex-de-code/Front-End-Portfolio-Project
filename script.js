// wiring html with event listeners 


// event listener for word of the day 
const wordOfTheDay = document.querySelector(".word-of-day");
wordOfTheDay.addEventListener("click", () => {
    //logs to console in dev web tools
    console.log("You have just clicked the word of the day button!"); 
});


//event listener for the search bar 
const searchBar = document.querySelector(".search-bar");
console.log(searchBar.value);  

//event listener for search button 
const submitButton = document.querySelector("[type=submit]");
submitButton.addEventListener("click", (event) => {
    //this is to prevent page from refreshing while testing search button
    event.preventDefault();
    console.log("You have just clicked the search button!")
});

// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     console.log(event.target.searchBar.value);

// })
