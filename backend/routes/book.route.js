const express = require('express');
const router = express.Router();


const bookcontroller = require('../controllers/book.controller');


router.get('/', bookcontroller.getBooks);

router.get('/:bookID', bookcontroller.getBook);

router.post('/create', bookcontroller.createBook);

router.put('/:bookID', bookcontroller.updateBook);

router.delete('/:bookID', bookcontroller.deleteBook);



module.exports = router;