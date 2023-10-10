var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	const {firstName, lastName, email} = req.body
	if(firstName, lastName, email){
		res.writeHead(400);
        res.end('Missing properties');
	}
	const msg = `Send email to address:${email}` 
	console.log(msg)

	res.status(200).send(msg);
});

module.exports = router;
