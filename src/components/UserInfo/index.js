import React from 'react';

export default ({ userData }) => {
	return (
		<li>
			<h2>{userData.username}</h2>
			<img src={userData.imageURL} alt="" />
		</li>
	);
};
