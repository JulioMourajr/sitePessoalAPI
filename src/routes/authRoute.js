const express = require('express');

const router = express.Router();

const authControler = require('../controlers/authControler');

router.post('/login', authControler.login);

module.exports = router;