import React from 'react';
import './style.css';

export default ({ profileData }) => {
	return (
		<div className="user-container">
			<h2>{profileData.login}</h2>
			<div className="user-info">
				Public Repos: {profileData.public_repos}
				<br></br>
				Followers: {profileData.followers}
				<br></br>
				Following: {profileData.following}
			</div>
			<img className="profile-img" src={profileData.avatar_url} />
		</div>
	);
};
