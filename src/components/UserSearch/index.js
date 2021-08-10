import React, { useState } from 'react';
import './style.css';

export default ({ onSubmit }) => {
	const [userInput, setUserInput] = useState('');

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(userInput);
		setUserInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Search for a Github user:</label>
			<input type="text" name="username" id="username" onChange={handleChange} value={userInput} />
			<input type="submit" value="Search" />
		</form>
	);
};
