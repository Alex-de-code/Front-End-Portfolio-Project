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
    console.log("You have just clicked the search button!");
});


// creating a variable that stores all elements with the class "dropdown-item"
const dropDownItems = document.querySelectorAll(".dropdown-item");
// iterate over each drop down item 
dropDownItems.forEach(item => {
    //add a click event listener to each dropdown item 
    item.addEventListener("click", function(event) {
        // prevent default behavior of the click event 
        event.preventDefault();
        // hry value of the name attribute of clicked item
        const selectedCategory = event.target.getAttribute("name");
        // log the selected category to the console 
        console.log(`You've selected the ${selectedCategory} category!`); 
    })
})


// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     console.log(event.target.searchBar.value);

// })
