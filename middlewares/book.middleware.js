const validateBookInput = (req, res, next) => {
    const {
        bookName,
        authorName,
        year,
        price,
        discount,
        pages,
        condition,
        description
    } = req.body;

    let errors = [];

    if (!bookName) errors.push('Book Name is required');
    if (!authorName) errors.push('Author Name is required');
    if (!year) errors.push('Year of Publication is required');
    if (!price) errors.push('Price is required');
    if (!pages) errors.push('Number of Pages is required');
    if (!condition) errors.push('Condition is required (e.g., new or used)');


    if (price && typeof price !== 'number') errors.push('Price must be a number');
    if (discount && typeof discount !== 'number') errors.push('Discount must be a number');
    if (year && (typeof year !== 'number' || year < 1900 || year > new Date().getFullYear())) {
        errors.push('Year of Publication must be a valid year');
    }
    if (pages && typeof pages !== 'number') errors.push('Number of Pages must be a number');
    if (condition && !['new', 'used'].includes(condition.toLowerCase())) errors.push('Condition must be either "new" or "used"');

    if (errors.length > 0) {
        return res.status(400).json({
            errors: errors,
            message: 'Invalid input fields',
        });
    }

    next();
};

module.exports = validateBookInput;
