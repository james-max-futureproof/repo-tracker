import React, { useState } from 'react';
import axios from 'axios';
import { UserSearch, UserList } from '../../components';
import './style.css';

export default () => {
	const [userData, setUserData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isNoUsersFound, setIsNoUsersFound] = useState(false);

	const onSubmit = async (userName) => {
		try {
			setIsError(false);
			setIsNoUsersFound(false);
			setIsLoading(true);
			const { data } = await axios.get(
				`https://api.github.com/search/users?q=${userName}&per_page=10`
			);
			if (data.items.length === 0) {
				setIsNoUsersFound(true);
				setIsLoading(false);
				return;
			}
			setUserData(data.items);
			setIsLoading(false);
		} catch (err) {
			setIsError(true);
			setIsLoading(false);
		}
	};

	return (
		<main>
			<h1>Github Repo Tracker</h1>
			<p className="landing-description">
				A simple way to find information about github repositories
			</p>
			<UserSearch onSubmit={onSubmit} />
			<UserList
				userData={userData}
				error={isError}
				loading={isLoading}
				noUsersFound={isNoUsersFound}
			/>
		</main>
	);
};
