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


