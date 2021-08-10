import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

export default ({ userData }) => {
	const { push } = useHistory();
	const handleClick = () => {
		push(`/profile/${userData.login}`);
	};
	return (
		<li>
			<h2>{userData.login}</h2>
			<button onClick={handleClick}>See Profile</button>
			<img src={userData.avatar_url} alt="" />
		</li>
	);
};
