export {}   // Needed otherwise transpiler will complain about 'cannot redeclare variable'
const express = require("express");
const router = express.Router();
const { checkAuthenticated } = require('../middleware/authentication')
const notificationsController = require('../controllers/notifications')

router.post('/notes/share', checkAuthenticated, notificationsController.insertShareNoteNotification);
router.get('/notes/shared-with-me', checkAuthenticated, notificationsController.getShareNoteNotifications);

module.exports = router;