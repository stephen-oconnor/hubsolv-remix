import React from 'react';
import IconLogo from '../../Icons/IconLogo';
import s from './styles.module.scss';

const Brand: React.SFC = () => {
	return (
		<div className={s.brand}>
			<IconLogo width={40} height={40} />
			<h1 className={s.name}>ReMix</h1>
		</div>
	);
};

export default Brand;
