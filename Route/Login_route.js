// passwordRoutes.js
const express = require('express');
const router = express()
const { forgotPassword, resetPassword ,addperson} = require('../Controller/Login_controller');
router.post('/adds', addperson)
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


module.exports = router;



