import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import consoles from '../consoles';

import './Console.css';

const Console = () => {
	return (
		<div>
			<div className="console-title">
				<strong>Console</strong>
			</div>
			<div className="console-container">
				<Row className="console-row">
					{consoles.map((console) => (
						<Col className="console-col" md={3}>
							<Product product={console} productType="consoles" />
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
};

export default Console;
