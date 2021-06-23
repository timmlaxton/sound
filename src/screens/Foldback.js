import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import foldbacks from '../foldback';

import './Foldback.css';

const Foldback = () => {
	return (
		<div>
			<div className="foldback-title">
				<strong>Foldback</strong>
			</div>
			<div className="foldback-container">
				<Row className="foldback-row">
					{foldbacks.map((foldback) => (
						<Col className="foldback-col" md={3}>
							<Product product={foldback} productType="foldback" />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Foldback;
