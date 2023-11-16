// wiring html with event listeners 

// event listener for word of the day 
const wordOfTheDay = document.querySelector(".word-of-day");
wordOfTheDay.addEventListener("click", () => {
    //logs to console in dev web tools
    console.log("You have just clicked the word of the day button!"); 
});

//event listener for search button 
// const submitButton = document.querySelector("[type=submit]");
// submitButton.addEventListener("submit", (event) => {
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    //this is to prevent page from refreshing while testing search button
    event.preventDefault();
    const searchWord = event.target.querySelector(".search-bar").value;
    console.log("You have just clicked the search button!");
    console.log(`You searched the word ${searchWord}`);
});


const dropDownCategory =document.querySelector(".dropdown-items");
dropDownCategory.addEventListener("change", function(event) {
    const selectedCategory = event.target.value;
    console.log(`You've selected the ${selectedCategory} category!`); 
}); 