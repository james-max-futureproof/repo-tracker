import React from 'react';
import { UserSearch, UserList } from '../../components';

export default () => {
	return (
		<main>
			<h1>Github Repo Tracker</h1>
			<p>A simple way to find information about github repositories</p>
			<UserSearch />
			<UserList />
		</main>
	);
};
