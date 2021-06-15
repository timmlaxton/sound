import React from 'react';
import './Microphones.css';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import products from '../products';
import stands from '../stands';

const Microphones = () => {
	return (
		<div>
			<Navbar />

			<div className="mic-title">
				<strong>Microphones</strong>
			</div>
			<div className="mic-container">
				<Row className="mic-row">
					{products.map((product) => (
						<Col className="mic-col" sm={1} md={6}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			</div>

			<div className="stand-title">
				<strong>Stands</strong>
			</div>
			<div className="stand-container">
				<Row className="stand-row">
					{stands.map((stand) => (
						<Col className="stand-col" sm={1} md={6}>
							<Product product={stand} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Microphones;
