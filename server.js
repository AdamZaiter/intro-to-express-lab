const express = require('express');
// Importing the express module

const app = express();
// Creating blank instnace



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// App will listen for requests on port 3000