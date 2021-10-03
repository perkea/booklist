const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    completed: Boolean,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;


// const book1 = new Book({
//     title: "little women",
//     author: "Louise",
//     completed: false
// });