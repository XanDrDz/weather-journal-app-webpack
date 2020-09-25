// Setup empty JS object to act as endpoint for all routes
let projectData = [];


// Require Express to run server and routes

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('CORS');
const fetch = require('node-fetch')

dotenv.config();
// Start up an instance of app

const app = express();

app.use(cors());

app.use(express.static('dist'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



// Setup Server

app.listen(8081, function () {
    console.log('App listening on port 8081')
})

// get

app.get('/all', function (req, res) {
res.send(projectData)
});

app.post('/all', addTemperature);

function addTemperature (req, res) {

    
   let newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        userResponse: req.body.userResponse,
    }
    projectData.push(newEntry);
    console.log(projectData);
    res.send(projectData);

}
