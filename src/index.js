/**
 * Configuration for express
 */


 //Dependencies
 const express = require('express');

 //Creating the express application
 const app= express();

 //sample HTTP GET call
 app.get('/', (req,res)=> {
        res.status(200).send('Helloo am from Express');
 });

 //Exporting the application
 module.exports = app;