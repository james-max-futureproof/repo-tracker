import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProfileInfo } from '../../components';
import './style.css';

export default () => {
	const [profileData, setProfileData] = useState([]);
	const [repoData, setRepoData] = useState([]);
	const [isRepoDataLoading, setIsRepoDataLoading] = useState(true);
	const [isRepoError, setIsRepoError] = useState(false);

	const { username, repo } = useParams();
	useEffect(() => {
		let isLoading = true;
		const fetchUserData = async () => {
			try {
				const { data } = await axios.get(`https://api.github.com/users/${username}`);
				if (isLoading) setProfileData(data);
			} catch (err) {
				console.log(err);
			}
		};

		const fetchRepoData = async () => {
			try {
				setIsRepoError(false);
				setIsRepoDataLoading(true);
				const { data } = await axios.get(`https://api.github.com/repos/${username}/${repo}`);
				if (data.message && data.message === 'Not found') {
					throw new Error(data.message);
				}
				console.log(data);
				setIsRepoDataLoading(false);
				setRepoData(data);
			} catch (err) {
				setIsRepoDataLoading(false);
				setIsRepoError(true);
				console.log(err);
			}
		};

		fetchUserData();
		fetchRepoData();
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
