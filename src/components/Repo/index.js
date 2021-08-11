import React from 'react';

export default ({ data, isError, isLoading }) => {
	return (
		<section>
			{isError ? (
				<p>
					Oops! Something went wrong. <br /> Please refresh the page or try again later
				</p>
			) : isLoading ? (
				<p>Loading...</p>
			) : (
				<p>{data.name}</p>
			)}
		</section>
	);
};
