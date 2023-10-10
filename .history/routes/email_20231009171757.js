var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	const {email} = req.body
	res.send('Send email to address: ', email);
});

module.exports = router;
