import React from 'react';
import './Analogue.css';
import { Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import analogues from '../analogues';

const Analogue = () => {
	return (
		<div>
			<Navbar />

			<div className="analogue-title">
				<strong>Analogue Outboards</strong>
			</div>
			<div className="analogue-container">
				<Row className="analogue-row">
					{analogues.map((analogue) => (
						<Col className="analogue-col" sm={1} md={6}>
							<Product product={analogue} />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Analogue;
