import React from 'react';
import './Equipment.css';

import { Link } from 'react-router-dom';

const Equipment = () => {
	return (
		<div>
			<div className="equipment-title">Equipment</div>
			<div className="container-box">
				<div className="box-home-1">
					<Link className="mic-link" to="/microphones">
						Point of capture
					</Link>
				</div>
				<div className="box-home-2">
					<Link className="analogue-link" to="/analogue">
						Analogue Outboard
					</Link>
				</div>
				<div className="box-home-3">
					<Link className="console-link" to="/console">
						Digital Stage
					</Link>
				</div>
				<div className="box-home-4">
					<Link className="foldback-link" to="/foldback">
						FoldBack Moitoring
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Equipment;
