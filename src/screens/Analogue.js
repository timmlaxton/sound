import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import analogues from '../analogues';
import './Analogue.css';

const Analogue = () => {
	return (
		<div>
			<div className="analogue-title">
				<strong>Analogue Outboards</strong>
			</div>
			<div className="analogue-container">
				<Row className="analogue-row">
					{analogues.map((analogue) => (
						<Col className="analogue-col" md={6}>
							<Product product={analogue} productType="analogues" />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Analogue;
