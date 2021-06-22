import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
	const [status, setStatus] = useState('Submit');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Sending...');
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value
		};
		let response = await fetch('http://localhost:5000/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify(details)
		});
		setStatus('Submit');
		let result = await response.json();
		alert(result.status);
	};

	return (
		<Container className="my-4">
			<Row>
				<Col>
					<div className="contact-container">
						<div className="contact-paragraph">
							{' '}
							<p>
								{' '}
								Sound engineer working in the live sector as a freelancer and chief engineer at Bloc+, Glasgow. My aim
								is to move into the sound design sector with a view to enhancing interactive audio integration into
								theatre, dance and therapeutic applications.{' '}
							</p>
							<br />
							<p>
								{' '}
								<solid>For Rates & Inquiries Fill In The Form Below </solid>{' '}
							</p>{' '}
						</div>

						<Row>
							<Col md={6} className="mx-auto">
								<Form onSubmit={handleSubmit}>
									<Form.Group className="form-name">
										<Form.Label for="name">Name: {''}</Form.Label>
										<Form.Control type="text" class="form-control" id="name" placeholder="name*" />
									</Form.Group>
									<Form.Group className="form">
										<Form.Label for="exampleFormControlInput1">Email: {''}</Form.Label>
										<Form.Control type="email" class="form-control" id="email" placeholder="email*" />
									</Form.Group>
									<Form.Group className="form">
										<Form.Label for="exampleFormControlInput1">City: {''}</Form.Label>
										<Form.Control type="text" class="form-control" id="city" placeholder="city*" />
									</Form.Group>
									<Form.Group className="form-message">
										<Form.Label for="message">Message: {''}</Form.Label>
										<Form.Control as="textarea" className="form" id="message" rows="10" placeholder="message*" />
									</Form.Group>
									<Button variant="primary" type="submit">
										{status}
									</Button>
								</Form>
							</Col>
						</Row>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Contact;
