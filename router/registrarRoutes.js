const express = require('express');
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const db = require('../database/connector');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Rate Limitierung für Login-Versuche
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 Minuten
    max: 5, // Nur 5 Anfragen pro IP alle 15 Minuten
    message: 'Zu viele Login-Versuche, bitte versuche es später erneut.'
});

// Manage views
router.get('/register', async (req, res) => {

});
router.get('/login', async (req, res) => {
    
});
router.get('/login/check', async (req, res) => {
    
});
router.get('/logout', (req, res) => {

});

// Post nodes
router.post('/register', loginLimiter, async (req, res) => {

})
router.post('/login', loginLimiter, async (req, res) => {
    
})

// Show main interface
function requireLogin(req, res, next) {

}
router.get('/', async (req, res) => {
    try {
        res.render('index', {});
    } catch (err) {
        console.error('Fehler beim Abrufen:', err);
        res.status(500).json({ error: 'Fehler beim Abrufen der Daten' });
    }
});



// DO NOT TOUCH
module.exports = router;