import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './style.css';

export default function Navbar() {
	const history = useHistory();

	console.log(history.location.pathname);

	const goToPrevious = () => {
		history.goBack();
	};

	return (
		<div className="navbar">
			<>
				<NavLink to="/">
					<button className="home-link">Home</button>
				</NavLink>
				<button className="back-button" onClick={goToPrevious}>
					Back
				</button>
			</>
		</div>
	);
}
