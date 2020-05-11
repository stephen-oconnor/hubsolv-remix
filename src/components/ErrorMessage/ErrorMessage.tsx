import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
	return (
		<div className={s.wrapper}>
			<p className={s.message}>{message}</p>
		</div>
	);
};

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default ErrorMessage;
