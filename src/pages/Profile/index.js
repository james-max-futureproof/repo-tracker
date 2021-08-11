import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Repos, ProfileInfo } from '../../components';

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
			<ProfileInfo profileData={profileData} />
			<div className="user-repos-container">
				{profileData.length === 0 ? <p>No Repositories Found!</p> : <Repos username={username} />}
			</div>
		</>
	);
}
