var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	console.log(req)
	res.send('Send email to address: ');
});

module.exports = router;
