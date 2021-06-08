import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './Home.css';

const Home = () => {
	return (
		<>
			<Jumbotron className="jumbotron">
				<h1>Hello, world!</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content
					or information.
				</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Jumbotron>
		</>
	);
};

export default Home;
