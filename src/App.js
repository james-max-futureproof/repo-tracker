import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Landing } from './pages';
import './global.css';

export default function App() {
	return (
		<>
			<Switch>
				<Route path="/">
					<Landing />
				</Route>
			</Switch>
		</>
	);
}
