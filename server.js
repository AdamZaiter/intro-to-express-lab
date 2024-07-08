const express = require('express');
// Importing the express module

const app = express();
// Creating blank instnace

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
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

