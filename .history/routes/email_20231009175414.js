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
			host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            },
            logger: true,
            transactionLog: true, // include SMTP traffic in the logs
            allowInternalNetworkInterfaces: false
		});
		const info = await transporter.sendMail({
            from: 'Nodemailer <example@nodemailer.com>',
			to: "bojan.jagetic@codemeup.rs, jagetic.bojan@gmail.com", // list of receivers
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
