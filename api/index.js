const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
console.log('in api/index.js');
const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.NODEMAILER_USER,
		pass: process.env.NODEMAILER_PASSWORD
	}
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Ready to Send');
	}
});

app.post('/api/contact', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: name,
		to: 'timmlaxton@gmail.com',
		subject: 'Contact Form Submission',
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json({ status: 'ERROR' });
		} else {
			res.json({ status: 'Thanks for getting in touch, I will get back to you soon' });
		}
	});
});

/*
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
*/

module.exports = app;
