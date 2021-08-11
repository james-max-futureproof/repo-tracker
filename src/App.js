import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile, Landing, Repo } from './pages';
import { Footer } from './components';
import './global.css';

export default function App() {
	return (
		<>
			<Switch>
				<Route exact path="/profile/:username">
					<Profile />
				</Route>
				<Route exact path="/profile/:username/repos/:repo">
					<Repo />
				</Route>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}
