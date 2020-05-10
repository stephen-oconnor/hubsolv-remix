import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MixList from '../MixList/MixList';
import useFetch from '../../utils/hooks/useFetch';
import { fetchOptions, limit, type, url } from '../../utils/constants';
import s from './styles.module.scss';

const Search: React.FC = () => {
	const [value, setValue] = useState('');

	const fetchUrl = `${url}?q=${value}&type=${type}&limit=${limit}`;
	const { fetchData, loading, error, data: mixes } = useFetch(fetchUrl, fetchOptions, false);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const newValue = event.target.value;
		setValue(newValue);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		fetchData();
		setValue('');
	}

	return (
		<div className={s.search}>
			<h2>Find your favourite radio shows, DJ mixes and podcasts!</h2>
			<SearchForm
				loading={loading}
				error={error}
				value={value}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
			{loading && <p>Loading...</p>}
			{error && <p>Error!</p>}
			<MixList mixes={mixes} />
		</div>
	);
};

export default Search;
