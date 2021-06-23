import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Product.css';
import '../data/products';

const Product = ({ product, productType }) => {
	let link = `/product/${product._id}`;

	if (productType) {
		link = `${link}?productType=${productType}`;
	}

	let { description } = product;

	if (description.length > 90) {
		description = description.slice(0, 90).padEnd('93', '.');
	}

	return (
		<Card className="product-card">
			<Link to={link}>
				<Card.Img className="card-image" src={product.image} variant="top" />
				<Card.Body className="card-body">
					<Card.Title className="card-name" as="div">
						{product.name}
					</Card.Title>
					<Card.Text className="card-description">{description}</Card.Text>
					<Card.Text as="div">Qty:{product.quantity}</Card.Text>
				</Card.Body>
			</Link>
		</Card>
	);
};

export default Product;
