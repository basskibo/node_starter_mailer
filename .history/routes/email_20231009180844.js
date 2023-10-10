var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");



/* GET users listing. */
router.post('/',  async (req, res, next) => {
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

	nodemailer.createTestAccount(async (err, account) => {
		console.log(account)
		const transporter = nodemailer.createTransport({
			host: "mail.codemeup.rs",
			port: 465,
			secure: true,
			auth: {
				// TODO: replace `user` and `pass` values from <https://forwardemail.net>
				user: "bojan.jagetic@codemeup.rs",
				pass: "Riba@6994",
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false,
			},
		});
		const info = await transporter.sendMail({
			from: '"Code Me Up', // sender address
			to: email, // list of receivers
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: "<b>Hello world?</b>", // html body
		});
		console.log("Message sent: %s", info);	
	})



	const msg = `Email sent to ${email}`
	console.log(msg)

	return res.status(200).send(msg);
});

module.exports = router;
