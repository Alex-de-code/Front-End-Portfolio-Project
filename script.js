// --~ script for word of day ~--> 
// event listener for word of the day 
const wordOfTheDay = document.querySelector(".word-of-day");
wordOfTheDay.addEventListener("click", () => {
    const url = 'https://wordsapiv1.p.rapidapi.com/words/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
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
            //this will convert the result string into a JSON object so we can then key into what we want
            const data = JSON.parse(result);
            //created a variable to select the the heading of the hero section
            const chosenWord = document.querySelector("#word"); 
            //now we will change the innerHTML of heading of hero section to be that of the word searched
            chosenWord.innerHTML = `The word of the day is:`; 
            // created a variable to select body/paragraph of the hero section 
            const chosenCategory = document.querySelector("#wordCategory"); 
            chosenCategory.innerHTML = data.word
        } catch (error) {
            console.error(error);
        }
    }; 
    //execute the f(x)
    fetchData();
});


// --~ script for word search, based on category selected ~--> 
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
        //save the value of the searched word string to a variable 
        const searchWord = document.querySelector(".search-bar").value;
        //created a variable to house the base url needed to access the data for the categories we want 
        const url = 'https://wordsapiv1.p.rapidapi.com/words/';
        //this is an object given through rapid API that will be used in fetching the data
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        // Define the category endpoint based on the selected category
        let categoryEndpoint;
        //a switch that checks which category case is received and completes url end 
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
            case "Examples":
                categoryEndpoint = `${searchWord}/examples`;
                break;
            default:
                console.error("Invalid category selected");
                return;
        }

        // Construct the URL for the category
        const newUrl = url + categoryEndpoint;

        // this attempts to fetch the data using the newUrl, and the data housed in options, if the data cannot be retrieved an error is given
        try {
            // this line uses fetch f(x) to make an async HTTP request to the newUrl, we use await to wait for the completion of the fetch and the result is stored in this variable
            const response = await fetch(newUrl, options);
            // here we use text method to extract response body as text and use await again to wait for the compltetion of this event and save it to this variable
            const result = await response.text();
            // log result
            console.log(result);
            //this will convert the result string into a JSON object so we can then key into what we want
            const data = JSON.parse(result);
            //created a variable to select the the heading of the hero section
            const chosenWord = document.querySelector("#word"); 
            //now we will change the innerHTML of heading of hero section to be that of the word searched
            chosenWord.innerHTML = data.word; 
            // created a variable to select body/paragraph of the hero section 
            const chosenCategory = document.querySelector("#wordCategory");
            if (selectedCategory === "Definitions") {
                const listOfDefinitions = [];
                if (data.definitions.length > 0) {
                    for (let i = 0; i < data.definitions.length; i++) {
                        listOfDefinitions.push(`${i + 1}. ${data.definitions[i].definition}`);
                    }
                    chosenCategory.innerHTML = listOfDefinitions.join('<br>');
                } else {
                    chosenCategory.innerHTML = "No defintions could be found for this word."
                }
            } else if (selectedCategory === "Synonyms") {
                const listOfSynonyms = [];
                if (data.synonyms.length > 0) {
                    for (let i = 0; i < data.synonyms.length; i++) {
                        listOfSynonyms.push(`${i + 1}. ${data.synonyms[i]}`);
                    }
                    chosenCategory.innerHTML = listOfSynonyms.join('<br>');
                } else {
                    chosenCategory.innerHTML = "No synonyms could be found for this word." 
                }
            } else if (selectedCategory === "Antonyms") {
                const listOfAntonyms = []; 
                if (data.antonyms.length > 0) {
                    for (let i = 0; i < data.antonyms.length; i++) {
                        listOfAntonyms.push(`${i + 1}. ${data.antonyms[i]}`);
                    }
                    chosenCategory.innerHTML = listOfAntonyms.join('<br>'); 
                } else {
                    chosenCategory.innerHTML = "No antonyms could be found for this word."
                }
            } else if (selectedCategory === "Examples") {
                const listOfExamples = []; 
                if (data.examples.length > 0) {
                    for (let i = 0; i < data.examples.length; i++) {
                        listOfExamples.push(`${i + 1}. "${data.examples[i]}"`);
                    }
                    chosenCategory.innerHTML = listOfExamples.join('<br>'); 
                } else {
                    chosenCategory.innerHTML = "No examples could be found for this word."
                }
            }
        //if there is an error 
        } catch (error) {
            console.error(error);
        } 
    }          

    // Execute the function when the form is submitted
    fetchDataForCategory();
});