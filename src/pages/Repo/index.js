import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../../components';
import './style.css';

export default () => {
	const [profileData, setProfileData] = useState([]);

	const { username, repo } = useParams();
	useEffect(() => {
		let isLoading = true;
		const fetchData = async () => {
			try {
				const { data } = await axios.get(`https://api.github.com/users/${username}`);
				console.log(data);
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
		<main>
			<ProfileInfo profileData={profileData} />
		</main>
	);
};
