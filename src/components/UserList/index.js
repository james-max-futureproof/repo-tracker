import React from 'react';
import { UserInfo } from '../';

export default ({ userData, loading, error, noUsersFound }) => {
	const users = userData ? userData.map((user, i) => <UserInfo userData={user} key={i} />) : '';

	return (
		<ul>
			{error ? (
				<p>Oops! Something went wrong...</p>
			) : loading ? (
				<p>Loading...</p>
			) : noUsersFound ? (
				<p>No users found. Try again with a different username.</p>
			) : (
				users
			)}
		</ul>
	);
};
