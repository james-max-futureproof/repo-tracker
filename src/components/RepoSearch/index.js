import React, { useState } from 'react';
import './style.css';

export default function RepoSearch({ searchRepos }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		searchRepos(searchTerm);
	};

	const updateInput = (e) => {
		const input = e.target.value;
		setSearchTerm(input);
	};

	return (
		<div className="repo-search-bar">
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={updateInput} value={searchTerm} placeholder="Search..." />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
}
