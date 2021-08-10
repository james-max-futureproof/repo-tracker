import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile } from './pages';
import { Footer } from './components';

export default function App() {
	return (
		<>
			<Switch>
				<Route exact path="/profile/:username">
					<Profile />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}
