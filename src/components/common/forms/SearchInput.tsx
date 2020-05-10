import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

export interface SearchInputProps {
	name: string;
	label: string;
	value?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	error?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
	name,
	label,
	onChange,
	placeholder,
	value,
	error,
}) => {
	return (
		<div className={s.wrapper}>
			<label htmlFor={name} className={s.srt}>
				{label}
			</label>
			<input
				type="search"
				name={name}
				id={name}
				className={`${s.control} ${s['control--search']}`}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <div className={s.error}>{error}</div>}
		</div>
	);
};

SearchInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	error: PropTypes.string,
};

export default SearchInput;
