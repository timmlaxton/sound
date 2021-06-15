import React from 'react';
import './Equipment.css';
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Equipment = () => {
	return (
		<div>
			<Navbar />
			<div className="equipment-title">Equipment</div>
			<div className="container-box">
				<div className="box-home-1">
					<Link className="mic-link" to="/microphones">
						Microphones & Stands
					</Link>
				</div>
				<div className="box-home-2">
					<Link className="analogue-link" to="/analogue">
						Analogue Outboards
					</Link>
				</div>
				<div className="box-home-3">
					<Link className="console-link" to="/stands">
						Console
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
