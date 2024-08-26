const Book = require('../models/bookSchema');

const getAllBooks = async () => {
    return await Book.find();
};

const borrowBook = async (bookId, userId) => {
    const book = await Book.findById(bookId);
    if (!book) throw new Error('Book not found');
    if (!book.available) throw new Error('Book is not available');

    book.available = false;
    book.borrowedBy = userId;
    return await book.save();
};

module.exports = { getAllBooks, borrowBook };
