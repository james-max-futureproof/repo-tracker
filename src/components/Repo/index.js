import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default ({ data, isError, isLoading }) => {
	const [commitHistory, setCommitHistory] = useState([]);

	useEffect(() => {
		const fetchCommits = async () => {
			try {
				if (!data) {
					console.log(data);
					console.log('escape cause of data is false');
					return;
				}
				const { newData: data } = await axios.get(`${cleanupUrl(data.commits_url, '{/sha}')}`);
				console.log(newData, data);
				setCommitHistory(newData);
			} catch (err) {
				console.log(err);
			}
		};
		fetchCommits();
		return () => {
			isLoading = false;
		};
	}, [data]);

	function cleanupUrl(url, remove) {
		if (url) {
			const location = url.indexOf(remove);
			if (location) {
				const newUrl = url.substring(0, location);
				return newUrl;
			}
			return url;
		}
	}

	return (
		<section>
			{isError ? (
				<p>
					Oops! Something went wrong. <br /> Please refresh the page or try again later
				</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				<div className="repository">
					<p>{data.name}</p>
					Forks: {data.forks}
					Issues: {data.issues}
					Commits:
					{commitHistory.map((commit) => (
						<>
							<p>{commit.commit.commiter.name}</p>
							<p>{commit.commit.commiter.date}</p>
							<p>{commit.commit.message}</p>
						</>
					))}
				</div>
			)}
		</section>
	);
};
