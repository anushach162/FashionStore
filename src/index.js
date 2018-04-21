/**
 * Configuration for express
 */


 //Dependencies
 const express = require('express');

 //Creating the express application
 const app= express();

 //sample HTTP GET call
//  app.get('/', (req,res)=> {
//         res.status(200).send('Helloo am from Express');
//  });

//Import the home route
const home = require('./routes/home.route');

//Middleware for home route
app.use('/', home);

 //Exporting the application
 module.exports = app;