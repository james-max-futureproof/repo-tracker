import React from 'react';

export default () => {
	return (
		<form>
			<label htmlFor="username">Github Username:</label>
			<input type="text" name="username" id="username" />
			<input type="submit" />
		</form>
	);
};
