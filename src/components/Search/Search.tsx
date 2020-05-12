import React, { useState, Suspense } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import useFetch from '../../utils/hooks/useFetch';
import { fetchOptions, limit, type, url } from '../../utils/constants';
import s from './styles.module.scss';

const MixList = React.lazy(() => import('../MixList/MixList'));

const Search: React.FC = () => {
	const [value, setValue] = useState('');
	const [savedValue, setSavedValue] = useState('');
	const [errors, setErrors] = useState({});

	const fetchUrl = `${url}?q=${value}&type=${type}&limit=${limit}`;
	const { fetchData, loading, error, data: items } = useFetch(fetchUrl, fetchOptions, false);
	const display = savedValue && items && Object.keys(items).length > 0;

	function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
		setValue(event.target.value);
	}

	function formIsValid(): boolean {
		const errors: any = {};

		if (!value) {
			errors.search = 'A search term is required.';
		}

		setErrors(errors);

		return Object.keys(errors).length === 0;
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		if (!formIsValid()) {
			return;
		}

		fetchData();
		setSavedValue(value);
		setValue('');
	}

	return (
		<>
			<div className={s.search}>
				<div className={s.wrapper}>
					<div className={s.form}>
						<h2 className={s.title}>
							Find mixes, podcasts and radio shows from your favourite DJs and artists!
						</h2>
						<SearchForm
							loading={loading}
							errors={errors}
							value={value}
							onChange={handleChange}
							onSubmit={handleSubmit}
						/>
					</div>
				</div>
			</div>
			{loading && <LoadingIndicator />}
			{error && <ErrorMessage message={'There has been a error, please try again.'} />}
			{display && (
				<Suspense fallback={null}>
					<div className={s.mixes}>
						<h3 className={s.heading}>Results for: {savedValue}</h3>
						<MixList mixes={items} />
					</div>
				</Suspense>
			)}
		</>
	);
};

export default Search;
