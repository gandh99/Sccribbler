export {}   // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require("express");
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authentication')
const notesController = require('../controllers/notes')
const scribblesController = require('../controllers/scribbles')

router.post('/save', checkAuthenticated, notesController.save, scribblesController.save);
router.get('/get-all-notes', checkAuthenticated, notesController.getAllNotes);
router.post('/share', checkAuthenticated, notesController.share);
router.delete('/delete/:noteId', checkAuthenticated, notesController.delete);

module.exports = router;