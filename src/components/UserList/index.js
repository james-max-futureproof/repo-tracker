import React from 'react';
import { UserInfo } from '../';

export default ({ userData }) => {
	const users = userData ? userData.map((user) => <UserInfo userData={user} />) : '';

	return <ul>{users}</ul>;
};
