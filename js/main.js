//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//make a carousel of the drinks - check
//make it work without a template literal with drinks that have spaces in it ex. moscow mule - check

document.querySelector('button').addEventListener('click',getDrink)
//waits for button click to run getDrink function

async function getDrink(){
    let drink = document.querySelector('input').value;
    //places the user text - type of cocktail - in the drink variable

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drink+"") //makes a request for the type of drink data
    .then(res => res.json()) // parse response as JSON
    .then(data => {  //API info comes back through 'data'

        if(data.drinks.length === 1){  //checks for drink types with only one recipe
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            //outputs data to DOM
            
        } else {
            for(let i = 0; i < data.drinks.length; i++){ //loops through each recipe
                setTimeout(()=>{ //makes each recipe wait before being output to DOM
                    document.querySelector('h2').innerText = data.drinks[i].strDrink
                    document.querySelector('img').src = data.drinks[i].strDrinkThumb
                    document.querySelector('h3').innerText = data.drinks[i].strInstructions
                    //outputs data to DOM
                }, 1000*6*i); //sets the timeout to 10 seconds
        }}
        }
    )
    .catch(err => { 
        console.log(`error ${err}`) //logs errors to console
    });
}