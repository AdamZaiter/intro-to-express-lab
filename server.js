const express = require('express');
// Importing the express module

const app = express();
// Creating blank instnace

const port = 3000;
// setting this way in order to be able to run last line of code. Needed to define port. 

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
// App will listen for requests on port 3000

app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
    res.send(`Hello there, ${username}`)
}) 
// Defined the route that matches /greetings/:username
// extract username from URL
// send the response with the username I write in the url

// Roll the dice
app.get('/roll/:number', (req, res) => {
    const number = req.params.number;
    if (isNaN(number)) {
        res.send("You must specify a number.");
    } else {
        const roll = Math.floor(Math.random() * (parseInt(number) + 1));
        res.send(`You rolled a ${roll}.`);
    }
});
// Defined the route that mateches roll number
// use app.get to get the number that the user types in the URL.
// if the perameter isnt a number, respond
// If the perameter is a number, respond with radnom number using Math.random

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99}
];
// Array of collectables from the lab instructions 

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    if (index >= 0 && index < collectibles.length) {
        const item = collectibles[index];
        res.send(`So, you want the ${item.name}? for ${item.price}, it can be yours!`);
    } else {
        res.send("This item is not yet in stock. Check back soon!");
    }
});
// Defined the route for collectibles 
// used app.get to retreieve the paramets to see what will be sent to user
// For example /collectibles/0 will print "So, you want the shiny..." etc.. 


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

// Copied the array of shoes from the lab

app.get('/shoes', (req, res) => { //Defined the route for Shoes
    let filteredShoes = shoes;

    if (req.query['min-price']) {
        const minPrice = parseFloat(req.query['min-price']); // query parameter for the mini\mum price shoes 
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
    }

    if (req.query['max-price']) { 
        const maxPrice = parseFloat(req.query['max-price']); // query parameter for the maax price of the shoes 
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
    }

    if (req.query.type) {
        const type = req.query.type.toLowerCase(); // type of shoe, only these shoes will show
        filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type);
    }

    res.json(filteredShoes);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); // Express application will listen for requests on the defined port (top of document i set it t o 3000), then it will log a message that the port we referenced
// is running