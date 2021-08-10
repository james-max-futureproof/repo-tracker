import React from 'react';
import { UserInfo } from '../';

export default ({ userData, loading, error }) => {
	const users = userData ? userData.map((user) => <UserInfo userData={user} />) : '';

	return (
		<ul>
			{error ? (
				<p>Oops! Something went wrong...</p>
			) : loading ? (
				<p>Loading...</p>
			) : userData.length === 0 ? (
				<p>No users found. Try again with a different username.</p>
			) : (
				users
			)}
		</ul>
	);
};
