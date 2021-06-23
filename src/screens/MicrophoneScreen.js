import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useUrlQuery } from '../hooks';
import './MicrophoneScreen.css';
import './AnalogueScreen.css';

const MicroPhoneScreen = ({ match }) => {
	const [product, setProduct] = useState([]);
	const urlQueryParams = useUrlQuery();

	useEffect(() => {
		(async () => {
			let dataMap = {
				analogues: () => import('../data/analogues'),
				stands: () => import('../data/stands'),
				products: () => import('../data/products')
			};

			const productType = urlQueryParams.get('productType') || 'products';
			const dataLoader = dataMap[productType];
			if (!dataLoader) return;
			const result = await dataLoader();
			const product = result.default.find((p) => p._id === match.params.id);
			setProduct(product);
		})();
	}, []);

	return (
		<div className="my-5">
			<Link className="back-button" to="/equipment">
				Go Back
			</Link>

			<Row className="mic-row">
				<Col className="micro-col" md={6}>
					<Image className="micro-image" src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<div className="mic-name">
						<h2 className="mic-title">{product.name}</h2>
						<p className="mic-description">{product.description}</p>
						<p className="mic-quantity">Qty: {product.quantity}</p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default MicroPhoneScreen;
