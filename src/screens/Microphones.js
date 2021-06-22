import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';
import stands from '../stands';
import './Microphones.css';

const Microphones = () => {
	return (
		<div>
			<div className="product-mic-title">
				<strong>Microphones</strong>
			</div>
			<div className="product-mic-container">
				<Row className="product-mic-row">
					{products.map((product) => (
						<Col className="product-mic-col" md={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			</div>

			<div className="stand-title">
				<strong>Stands</strong>
			</div>
			<div className="product-mic-container">
				<Row className="product-mic-row">
					{stands.map((stand) => (
						<Col className="product-mic-col" md={3}>
							<Product product={stand} productType="stands" />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Microphones;
