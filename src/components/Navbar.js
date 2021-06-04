import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeadphones } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from '../components/Button';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	window.addEventListener('resize', showButton);

	return (
		<>
			<div className="navbar">
				<div className="navabr-container container">
					<Link to="/" className="navbar-logo">
						<FiHeadphones className="navbar-icon" />
						Everything Audio
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Equipment
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Booking & Rates
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Contact
							</Link>
						</li>
						<li className="nav-btn">
							{button ? (
								<Link to="/sign-up" className="btn-link">
									<Button buttonStyle="btn--outlin">Sign Up</Button>
								</Link>
							) : (
								<Link to="/sign-up" className="btn-link">
									<Button buttonStyle="btn--outline" buttonSize="btn--mobile">
										Sign Up
									</Button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
