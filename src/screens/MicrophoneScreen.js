import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { useUrlQuery } from '../hooks';
import './MicrophoneScreen.css';
import './AnalogueScreen.css';

const MicroPhoneScreen = ({ match }) => {
	const [product, setProduct] = useState([]);
	const urlQueryParams = useUrlQuery();
	const history = useHistory();
	console.log({ history });
	useEffect(() => {
		(async () => {
			let dataMap = {
				analogues: () => import('../data/analogues'),
				stands: () => import('../data/stands'),
				products: () => import('../data/products'),
				consoles: () => import('../data/consoles'),
				foldbacks: () => import('../data/foldbacks')
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
		<Container className="my-5">
			<a className="back-button fas fa-arrow-left" onClick={history.goBack}></a>

			<Row className="mic-row">
				<Col
					className="mic-col"
					md={{
						span: 2,
						offset: 3
					}}
				>
					<Image className="mic-image" src={product.image} alt={product.name} fluid />
				</Col>
				<Col md={4}>
					<div className="mic-name">
						<h2 className="mic-title">{product.name}</h2>
						<p className="mic-description">{product.description}</p>
						<p className="mic-quantity">Qty: {product.quantity}</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default MicroPhoneScreen;
