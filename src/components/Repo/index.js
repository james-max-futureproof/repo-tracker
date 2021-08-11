import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default ({ data, isError, isLoading }) => {
	const [commitHistory, setCommitHistory] = useState([]);

	useEffect(() => {
		const fetchCommits = async (url) => {
			try {
				const { data: newData } = await axios.get(`${cleanupUrl(url, '{/sha}')}`);
				setCommitHistory(newData);
			} catch (err) {
				console.log(err);
			}
		};

		if (data.commits_url) {
			fetchCommits(data.commits_url);
		}
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
					<h2>{data.name}</h2>
					<p>Forks: {data.forks}</p>
					<p>Issues: {data.issues}</p>
					<h3>Commits:</h3>
					{commitHistory.map((commit) => (
						<div className="commit" key={commit.sha}>
							<p>{commit.commit.committer.name}</p>
							<p>{commit.commit.committer.date}</p>
							<p>{commit.commit.message}</p>
							<img src={commit.author.avatar_url} alt="" />
						</div>
					))}
				</div>
			)}
		</section>
	);
};
