const { getAllBooks, borrowBook } = require('../services/bookService');

const browseBooks = async (req, res) => {
    try {
        const books = await getAllBooks();
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
};

const borrow = async (req, res) => {
    const { bookId } = req.body;
    try {
        const book = await borrowBook(bookId, req.user.id);
        res.status(200).send(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { browseBooks, borrow };
