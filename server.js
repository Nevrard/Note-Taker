const express = require('express');
const bodyParser = require('body-parser')

 

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/htmlroutes')(app)

require('./routes/apiroutes')(app)

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });