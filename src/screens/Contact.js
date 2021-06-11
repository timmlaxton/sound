import React, { useState } from 'react';
import './Contact.css';
import Navbar from '../components/Navbar';

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
		<div>
			<Navbar />
			<div className="container">
				<p>
					{' '}
					Sound engineer working in the live sector as a freelancer and chief engineer at Bloc+, Glasgow. My aim is to
				</p>
				<p>
					move into the sound design sector with a view to enhancing interactive audio integration into theatre, dance
					and therapeutic applications.{' '}
				</p>
				<br />
				<p>
					{' '}
					<solid>For Rates & Inquiries Fill In The Form Below </solid>{' '}
				</p>
				<form onSubmit={handleSubmit}>
					<div className="form-name">
						<label for="name">Name: {''}</label>
						<input type="name" class="form-control" id="name" placeholder="name*"></input>
					</div>
					<div className="form">
						<label for="exampleFormControlInput1">Email: {''}</label>
						<input type="email" class="form-control" id="email" placeholder="email*"></input>
					</div>
					<div className="form">
						<label for="exampleFormControlInput1">City: {''}</label>
						<input type="city" class="form-control" id="city" placeholder="city*"></input>
					</div>
					<div className="form-message">
						<label for="message">Message: {''}</label>
						<textarea className="form" id="message" rows="10" placeholder="message*"></textarea>
					</div>
					<button type="submit">{status}</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
