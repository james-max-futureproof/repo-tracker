import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Profile, Landing } from './pages';
import { Footer } from './components';
import './global.css';

export default function App() {
	return (
		<>
			<Switch>
    		<Route exact path="/profile/:username">
					<Profile />
				</Route>
    		<Route path="/">
					<Landing />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}
