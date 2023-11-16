// wiring html with event listeners 


// event listener for word of the day 
const wordOfTheDay = document.querySelector(".word-of-day");
wordOfTheDay.addEventListener("click", () => {
    console.log("You have just clicked the word of the day button!"); 
});