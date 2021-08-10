import React, { useState } from 'react';
import axios from 'axios';
import { UserSearch, UserList } from '../../components';

export default () => {
	const [userData, setUserData] = useState([]);

	const onSubmit = async (userName) => {
		const { data } = await axios.get(
			`https://api.github.com/search/users?q=${userName}&per_page=10`
		);
		setUserData(data.items);
	};

	return (
		<main>
			<h1>Github Repo Tracker</h1>
			<p>A simple way to find information about github repositories</p>
			<UserSearch onSubmit={onSubmit} />
			<UserList />
		</main>
	);
};
