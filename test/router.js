var express = require('express');
const s = require("./s.js");
const ignore = require("./ignore.js");
var router = express.Router();

router.get('/', function(req, res) {
    res.send(s);
});

router.get('/ignore', function(req, res) {
    res.send(ignore);
});

module.exports = router;