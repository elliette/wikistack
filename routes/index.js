const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki.js')

router.use('/wiki', wikiRouter)

router.get('/', function(req, res, next) {
	res.render('index'); 
})




module.exports = router;
