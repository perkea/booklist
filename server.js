// require our dependencies
const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/books');
// initialize the express app
const app = express();
// configure server settings
require('dotenv').config();
// establish a connection to MongoDB

const DATABASE_URL = process.env.DATABASE_URL;
// client connection method
mongoose.connect(DATABASE_URL)

// connection instance shortcut variable
const db = mongoose.connection;


db.on('connected', () => console.log(`Connected to the ${db.name} database on port:${db.port}`));
db.on('error', (error) => console.log(`Uh Oh! Mongodb had and error ${error.message}`));
db.on('disconnected', () => console.log('mongo disconnected'));
// mount middleware
app.use(express.urlencoded({
    extended: true
}));
// mount our routes
// INDEX ROUTE
app.get("/books", (req, res)=>{
res.send("index");
});
//new
app.get("/books/new", (req, res)=>{
res.render("new.ejs");
});

//create route
app.post("/books", (req, res) => {
    console.log("value of the body", req.body);
    if (req.body.completed === "on") {
        req.body.completed = true;
    } else {
        req.body.completed = false;
    }
Book.create(req.body,(error,createdBook)=>{
    //You can also use create() to define the model instance at the same time 
    //as you save it. The callback will return an error for the first argument and the newly-created model instance for the second argument.
    console.log("created book", createdBook);
res.send(createdBook);
})
});


// UPDATE ROUTE

// tell the server to listen for requests from the client
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Express is listening on port:${port}`);
});