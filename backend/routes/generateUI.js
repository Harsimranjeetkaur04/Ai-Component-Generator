const express = require('express');
const router = express.Router();
const { generateUIComponent } = require('../controllers/generateController');

router.post('/', generateUIComponent);

module.exports = router;
