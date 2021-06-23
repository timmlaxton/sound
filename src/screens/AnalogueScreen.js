import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

import './AnalogueScreen.css';

const AnalogueScreen = () => {
	return (
		<div className="my-4">
			<Link className="back-button" to="/analogue">
				Go Back
			</Link>

			<Row className="analogue-row">
				<Col className="analogue-col" md={3}>
					<Image className="analogue-image" src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<div className="analogue-name">
						<h2 className="analogue-title">{product.name}</h2>
						<p className="analogue-description">{product.description}</p>
						<p className="analogue-quantity">Qty: {product.quantity}</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default AnalogueScreen;
