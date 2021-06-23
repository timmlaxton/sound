import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
	return (
		<div>
			<Jumbotron className="jumbotron home-hero-banner">
				<h1 className="jumbo-title">Everything Audio</h1>
				<p className="jumbo-text">Glasgow, {''}Scotland 07513 579731.</p>
			</Jumbotron>
			<div className="row-home">
				<div className="column-home">
					<h1 className="column-title">Two Unique Studios </h1>
				</div>
				<div className="column-paragraph">
					<p className="paragraph-one">
						Everything Audio is a studio complex located in Glasgow, Scotland and owned by Stevin Cossar
					</p>
					<p className="paragraph-two">
						<strong>Studio A</strong> has its own lounge, kitchenette, sink and toilets, and a separate entrance door
						providing privacy and self-sufficency. Studio B is the smaller and less expensive of our studios. By most
						standards it is still quite large, with an 800-square foot live room (with 30 foot ceiling) and a 300-square
						foot isolation room. The control room is also 300 square feet. There is a small, uncomfortable booth as
						well. In addition to music recording and mixing, we offer analog tape-to-digital transfers at competitive
						rates, and can bake and restore tapes to facilitate proper transfer.
					</p>
					<p className="paragraph-three">
						<strong>Studio B</strong> is the smaller and less expensive of our studios. By most standards it is still
						quite large, with an 800-square foot live room (with 30 foot ceiling) and a 300-square foot isolation room.
						The control room is also 300 square feet. There is a small, uncomfortable booth as well. In addition to
						music recording and mixing, we offer analog tape-to-digital transfers at competitive rates, and can bake and
						restore tapes to facilitate proper transfer.
					</p>
				</div>
			</div>

			{/* <Equipment /> */}
			<Footer />
		</div>
	);
};

export default Home;
