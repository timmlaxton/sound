import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

import './FoldbackScreen.css';

const FoldbackScreen = () => {
	return (
		<div className="my-4">
			<Link className="back-button" to="/foldback">
				Go Back
			</Link>

			<Row className="foldback-row">
				<Col className="foldback-col" md={3}>
					<Image className="foldback-image" src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={3}>
					<div className="foldback-name">
						<h2 className="foldback-title">{product.name}</h2>
						<p className="foldback-description">{product.description}</p>
						<p className="foldback-quantity">Qty: {product.quantity}</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default FoldbackScreen;
