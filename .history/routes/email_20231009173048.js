var express = require('express');
var router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "mail.codemeup.net",
	port: 465,
	secure: true,
	auth: {
		// TODO: replace `user` and `pass` values from <https://forwardemail.net>
		user: "bojan.jagetic@codemeup.rs",
		pass: "Riba@6994",
	},
});

/* GET users listing. */
router.post('/send', async function (req, res, next) {
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

	const info = await transporter.sendMail({
		from: '"Fred Foo 👻" <foo@example.com>', // sender address
		to: "bojan.jagetic@codemeup.rs, baz@example.com", // list of receivers
		subject: "Hello ✔", // Subject line
		text: "Hello world?", // plain text body
		html: "<b>Hello world?</b>", // html body
	});

	console.log("Message sent: %s", info.messageId);

	const msg = `Email sent to ${email}`
	console.log(msg)

	res.status(200).send(msg);
});

module.exports = router;
