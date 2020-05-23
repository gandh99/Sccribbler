export {}   // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require("express");
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authentication')
const categoryController = require('../controllers/category')

router.post('/create', checkAuthenticated, categoryController.create);
router.get('/get', checkAuthenticated, categoryController.get);
router.delete('/delete/:categoryId', checkAuthenticated, categoryController.delete);

module.exports = router;