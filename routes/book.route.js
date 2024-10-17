const express = require('express');
const { createBook, editBook, deleteBook, fetchAllBooks, fetchSpecificBook } = require('../controllers/book.controller');
const router = express.Router();
const validateBookInput = require('../middlewares/book.middleware');

// Create a new comic book
router.post('/create', validateBookInput, createBook);

// Edit an existing comic book
router.put('/edit/:id', validateBookInput, editBook);

// Delete a comic book
router.delete('/delete/:id', deleteBook);

// Fetch all comic books 
router.get('/list', fetchAllBooks);

// Fetch comic book details by ID
router.get('/:id', fetchSpecificBook);

module.exports = router;
