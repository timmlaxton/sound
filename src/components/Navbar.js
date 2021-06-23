import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHeadphones } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import './Navbar.css';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	console.log(button);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
		window.addEventListener('resize', showButton);

		return {
			// window.removeEventListener('resize', showButton)
		};
	}, []);

	return (
		<IconContext.Provider value={{ color: '#ffff' }}>
			<div className="navbar">
				<div className="navbar-box ">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<FiHeadphones className="navbar-icon" />
						Everything Audio
					</Link>
					<div className="menu-icon" onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<div>
						<ul className={click ? 'nav-menu active' : 'nav-menu'}>
							<li className="nav-item">
								<Link to="/equipment" className="nav-links" onClick={closeMobileMenu}>
									Equipment
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/booking" className="nav-links" onClick={closeMobileMenu}>
									Booking & Rates
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/about" className="nav-links" onClick={closeMobileMenu}>
									About
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Navbar;
