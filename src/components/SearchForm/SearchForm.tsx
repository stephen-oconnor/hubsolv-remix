import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../common/forms/SearchInput';
import IconSearch from '../Icons/IconSearch';
import s from './styles.module.scss';

export interface SearchFormProps {
	value?: string | undefined;
	loading: boolean;
	errors: any;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
	value,
	loading = false,
	errors = false,
	onChange,
	onSubmit,
}) => {
	return (
		<form className={s.form} onSubmit={onSubmit}>
			<div className={s.item}>
				<SearchInput
					name={'search'}
					label={'Search'}
					onChange={onChange}
					value={value}
					error={errors.search}
				/>
			</div>
			<button type="submit" className={s.submit}>
				{<span className={s.srt}>{loading ? 'Loading...' : 'Search'}</span>}
				{<IconSearch width={24} height={24} fill={'#001724'} />}
			</button>
		</form>
	);
};

SearchForm.propTypes = {
	value: PropTypes.string,
	loading: PropTypes.bool.isRequired,
	errors: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
