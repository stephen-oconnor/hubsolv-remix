import React from 'react';
import s from './styles.module.scss';
import IconLogo from '../Icons/IconLogo';

const Header: React.SFC = () => {
	return (
		<div className={s.header}>
			<div className={s.brand}>
				<IconLogo width={40} height={40} />
				<h1 className={s.brand__name}>ReMix</h1>
			</div>
		</div>
	);
};

export default Header;
