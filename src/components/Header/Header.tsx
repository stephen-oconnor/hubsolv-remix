import React from 'react';
import Brand from '../common/Brand/Brand';
import s from './styles.module.scss';

const Header: React.SFC = () => {
	return (
		<div className={s.header}>
			<Brand />
		</div>
	);
};

export default Header;
