const express = require('express');
const { browseBooks, borrow } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/browse', browseBooks);
router.post('/borrow', authMiddleware, borrow);

module.exports = router;
