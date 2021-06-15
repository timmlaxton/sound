import React from 'react';
import { Card } from 'react-bootstrap';
import './Product.css';

const Product = ({ product }) => {
	return (
		<Card className="card-body">
			<Card.Img className="card-image" src={product.image} variant="top" />
			<Card.Body className="card-body">
				<Card.Title className="card-name" as="div">
					{product.name}
				</Card.Title>
				<Card.Text className="card-description">{product.description}</Card.Text>
				<Card.Text as="div">Qty:{product.quantity}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Product;
