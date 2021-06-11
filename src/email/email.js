const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
	'1023804153268-9pme96h3qta80rusrntdrfu0ok6kjsra.apps.googleusercontent.com',
	'TRphCtYR7C8oQ2KyPdz9j8Zf',
	'https://developers.google.com/oauthplayground'
);

oauth2Client.setCredentials({
	refresh_token:
		'1//04pckgnk5xLfVCgYIARAAGAQSNwF-L9IrpK_3ajPUyQ_0TWhPA3v9nwhuvEw-7AYJRutCZhtg1OeWHmkAwRYpMqUB2fKIG_nbuaw'
});
const accessToken = oauth2Client.getAccessToken();

const smtpTransport = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		type: 'OAuth2',
		user: 'your.gmail.here@gmail.com',
		clientId: 'Your ClientID Here',
		clientSecret: 'Your Client Secret Here',
		refreshToken: 'Your Refresh Token Here',
		accessToken: accessToken
	}
});
