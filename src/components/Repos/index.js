import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RepoSearch } from '../../components';
import './style.css';

import axios from 'axios';

export default function Repos({ username }) {
	const [userRepoList, setUserRepoList] = useState([]);

	useEffect(() => {
		let isLoading = true;
		const fetchData = async () => {
			try {
				const { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
				if (isLoading) setUserRepoList(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
		return () => {
			isLoading = false;
		};
	}, []);

	const searchRepos = async (searchTerm) => {
		const newData = await fetchSearchData(searchTerm);
		setUserRepoList(newData.items);
	};

	const fetchSearchData = async (searchTerm) => {
		const queryString = 'q=' + encodeURIComponent(`user:${username} ${searchTerm} in:name`);
		try {
			const { data } = await axios.get(`https://api.github.com/search/repositories?${queryString}`);
			return data;
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<RepoSearch searchRepos={searchRepos} />
			<div className="repos-container">
				{userRepoList.map((repo, index) => (
					<Link key={index} to={`/profile/${username}/repos/${repo.name}`}>
						<div className="repository">
							<h4>{repo.name}</h4>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
