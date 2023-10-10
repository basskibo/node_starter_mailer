var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	const {email} = req.body
	const msg = `Send email to address:${email}` 
	console.log(msg)
	res.status(200).send();
});

module.exports = router;
