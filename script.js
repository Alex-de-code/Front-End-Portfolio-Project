//this is the base URL for word searches
const url = 'https://wordsapiv1.p.rapidapi.com/words/';
//this creates an options object which will house our api key and main link 
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
};


// wiring html with event listeners 

// event listener for word of the day 
const wordOfTheDay = document.querySelector(".word-of-day");
wordOfTheDay.addEventListener("click", () => {
    //logs to console in dev web tools
    console.log("You have just clicked the word of the day button!");
    //this is the end of the url needed to call a random word from API
    const newUrl = url + '?random=true' 
    //a function that returns the data, the way we get the proper part of the API is through newUrl which get us the right path for the data type or in this case category type
    async function fetchData() {
        try {
            const response = await fetch(newUrl, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }; 
    //execute the f(x)
    fetchData();
});


// Select the form element
const form = document.querySelector("form");

// Add an event listener to the form for the submit event
form.addEventListener("submit", async function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the selected category
    const selectedCategory = document.querySelector(".dropdown-items").value;
    console.log(`You've selected the ${selectedCategory} category!`);

    // Fetch data based on the selected category
    async function fetchDataForCategory() {
        const searchWord = document.querySelector(".search-bar").value;
        const url = 'https://wordsapiv1.p.rapidapi.com/words/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        // Define the category endpoint based on the selected category
        let categoryEndpoint;
        switch (selectedCategory) {
            case "Definitions":
                categoryEndpoint = `${searchWord}/definitions`;
                break;
            case "Synonyms":
                categoryEndpoint = `${searchWord}/synonyms`;
                break;
            case "Antonyms":
                categoryEndpoint = `${searchWord}/antonyms`;
                break;
            default:
                console.error("Invalid category selected");
                return;
        }

        // Construct the URL for the category
        const newUrl = url + categoryEndpoint;

        try {
            // Fetch and log the result
            const response = await fetch(newUrl, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    // Execute the function when the form is submitted
    fetchDataForCategory();
});