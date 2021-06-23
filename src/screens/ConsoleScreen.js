import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import './ConsoleScreen.css';

const ConsoleScreen = () => {
	return (
		<div className="my-4">
			<Link className="back-button" to="/console">
				Go Back
			</Link>

			<Row className="console-row">
				<Col className="console-col" md={3}>
					<Image className="console-image" src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<div className="console-name">
						<h2 className="console-title">{product.name}</h2>
						<p className="console-description">{product.description}</p>
						<p className="console-quantity">Qty: {product.quantity}</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default ConsoleScreen;
