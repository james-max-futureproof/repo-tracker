import React, { useState, useEffect } from 'react';
import defaultImage from '../../assets/images/default-avatar.png';
import axios from 'axios';
import './style.css';

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
				<div className="repo-info">
					<a href={data.html_url} target="_blank">
						<h2>{data.name}</h2>
					</a>
					<p>Forks: {data.forks}</p>
					<p>Open issues: {data.open_issues}</p>
					<h3>Commits:</h3>
					{commitHistory.map((commit) => (
						<div className="commit" key={commit.sha}>
							<p>{commit.commit.committer.name}</p>
							<p>{new Date(commit.commit.committer.date).toUTCString()}</p>
							<p>{commit.commit.message}</p>
							{commit.author ? (
								<img src={commit.author.avatar_url} alt="avatar image" />
							) : (
								<img src={defaultImage} alt="avatar image" />
							)}
						</div>
					))}
				</div>
			)}
		</section>
	);
};
