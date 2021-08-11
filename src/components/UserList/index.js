import React from 'react';
import { UserInfo } from '../';
import './style.css';

export default ({ userData, loading, error, noUsersFound }) => {
	const users = userData
		? userData.map((user, i) => (
				<UserInfo userData={user} key={i}>
					{i === userData.length - 1 ? '' : <hr />}
				</UserInfo>
		  ))
		: '';

	return (
		<ul>
			{error ? (
				<p>Oops! Something went wrong...</p>
			) : loading ? (
				<p>Loading...</p>
			) : noUsersFound ? (
				<p>No users found. Try again with a different username.</p>
			) : users.length === 0 ? (
				<p>Search for a Github user...</p>
			) : (
				users
			)}
		</ul>
	);
};
