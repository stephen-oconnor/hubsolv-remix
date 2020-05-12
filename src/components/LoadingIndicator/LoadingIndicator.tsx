import React from 'react';
import s from './styles.module.scss';

const LoadingIndicator: React.SFC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.spinner}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<p className={s.srt}>Loading</p>
		</div>
	);
};

export default LoadingIndicator;
