import React, { useState } from 'react';

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
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={updateInput} value={searchTerm} />
			</form>
		</div>
	);
}
