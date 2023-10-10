var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	const {firstName, lastName, email} = req.body
	if(!firstName || !lastName || !email){
		let missingFields = ''
		if(!firstName){
			missingFields+='First name'
		}
		if(!lastName){
			missingFields+='Last Name'
		}
		if(!email){
			missingFields+='Email'
		}
		res.writeHead(400);
        res.end(`Missing properties: ${missingFields}`);
	}
	const msg = `Email sent to :${email}` 
	console.log(msg)

	res.status(200).send(msg);
});

module.exports = router;
