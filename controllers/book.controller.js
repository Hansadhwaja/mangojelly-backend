const Book = require('../models/book.model')

const createBook = async (req, res) => {
    try {
        const newComicBook = new Book(req.body);
        await newComicBook.save();
        res.status(201).json(newComicBook);
    } catch (error) {
        console.log('Error creating new Comic Book:', error);

        res.status(500).json({ error: error.message });
    }
}

const editBook = async (req, res) => {
    try {
        const updatedComic = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedComic) return res.status(404).json({ message: 'Comic not found' });
        res.status(200).json(updatedComic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Comic book deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const fetchAllBooks = async (req, res) => {
    const { page = 1, limit = 10, sort = 'bookName', filter } = req.query;
    try {
        const query = filter ? { ...filter } : {};
        const comics = await Book.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort(sort);
        res.status(200).json(comics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const fetchSpecificBook = async (req, res) => {
    try {
        const comic = await Book.findById(req.params.id);
        if (!comic) return res.status(404).json({ message: 'Comic not found' });
        res.status(200).json(comic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createBook,
    editBook,
    deleteBook,
    fetchAllBooks,
    fetchSpecificBook
}