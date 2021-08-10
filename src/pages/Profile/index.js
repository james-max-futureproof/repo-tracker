import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Repos } from '../../components';

import './style.css';

const axios = require('axios');

export default function Profile() {
	const [profileData, setProfileData] = useState([]);

	const { username } = useParams();

	useEffect(() => {
		let isLoading = true;
		const fetchData = async () => {
			try {
				const { data } = await axios.get(`https://api.github.com/users/${username}`);
				if (isLoading) setProfileData(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
		return () => {
			isLoading = false;
		};
	}, []);

	return (
		<>
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
			<div className="repos-container">
				<Repos username={username} />
			</div>
		</>
	);
}
