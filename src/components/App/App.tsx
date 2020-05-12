import React from 'react';
import { hot } from 'react-hot-loader';
import Header from '../Header/Header';
import Search from '../Search/Search';

const App: React.SFC = () => {
	return (
		<main role="main">
			<Header />
			<Search />
		</main>
	);
};

export default hot(module)(App);
