import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../common/forms/SearchInput';

export interface SearchFormProps {
	value?: string | undefined;
	loading: boolean;
	error: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
	value,
	loading = false,
	error = false,
	onChange,
	onSubmit,
}) => {
	return (
		<form onSubmit={onSubmit}>
			<SearchInput name={'search'} label={'Search'} onChange={onChange} value={value} />
			<button type="submit">{loading ? 'Loading...' : 'Search'}</button>
		</form>
	);
};

SearchForm.propTypes = {
	value: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
