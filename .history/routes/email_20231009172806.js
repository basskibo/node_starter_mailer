var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.forwardemail.net",
	port: 465,
	secure: true,
	auth: {
		// TODO: replace `user` and `pass` values from <https://forwardemail.net>
		user: "bojan.jagetic@codemeup.net",
		pass: "Riba@6994",
	},
});

/* GET users listing. */
router.post('/send', function (req, res, next) {
	// const {} = req
	const { firstName, lastName, email } = req.body
	if (!firstName || !lastName || !email) {
		let missingFields = ''
		if (!firstName) {
			missingFields += 'First name'
		}
		if (!lastName) {
			missingFields += 'Last Name'
		}
		if (!email) {
			missingFields += 'Email'
		}
		res.writeHead(400);
		res.end(`Missing properties: ${missingFields}`);
	}
	const msg = `Email sent to ${email}`
	console.log(msg)

	res.status(200).send(msg);
});

module.exports = router;
