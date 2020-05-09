import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import s from './styles.module.scss';
import useFetch from '../../api/searchApi';

const Search: React.FC = () => {
	const [value, setValue] = useState('');

	const url = 'https://api.mixcloud.com/search/';
	const searchTerm = value;
	const type = 'cloudcast';
	const limit = 10;
	const fetchUrl = `${url}?q=${searchTerm}&type=${type}&limit=${limit}`;
	const fetchOptions = { method: 'GET' };

	const { fetchData, loading, error, data } = useFetch(fetchUrl, fetchOptions, false);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const newValue = event.target.value;
		setValue(newValue);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		fetchData();
	}

	return (
		<div className={s.search}>
			<h2>Find your favourite radio shows, DJ mixes and podcasts!</h2>
			<SearchForm loading={loading} value={value} onChange={handleChange} onSubmit={handleSubmit} />
		</div>
	);
};

export default Search;
