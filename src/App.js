import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile, Landing, Repo } from './pages';
import { Navbar, Footer } from './components';
import './global.css';

export default function App() {
	return (
		<>
			<Switch>
				<Route exact path="/profile/:username">
					<Navbar />
					<Profile />
				</Route>
				<Route exact path="/profile/:username/repos/:repo">
					<Navbar />
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
