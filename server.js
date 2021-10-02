// require our dependencies
const express = require('express');
const mongoose = require('mongoose');
// initialize the express app
const app = express();
// configure server settings
require('dotenv').config();
// establish a connection to MongoDB

const DATABASE_URL = process.env.DATABASE_URL;
// client connection method
mongoose.connect(DATABASE_URL);
// connection instance shortcut variable
const db = mongoose.connection;


db.on('connected', () => console.log(`Connected to the ${db.name} database on port:${db.port}`));
db.on('error', () => console.log(`Uh Oh! Mongodb had and error ${error.message}`));
// mount middleware
app.use(express.urlencoded({ extended: false }));
// mount our routes
// INDEX ROUTE



// UPDATE ROUTE

// tell the server to listen for requests from the client
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`); 
});