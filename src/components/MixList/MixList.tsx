import React from 'react';
import PropTypes from 'prop-types';
import MixItem from './MixItem/MixItem';
import s from './styles.module.scss';

interface MixListProps {
	mixes: any;
}

const MixList: React.FC<MixListProps> = ({ mixes }) => {
	if (mixes && mixes.data && mixes.data.length > 0) {
		return (
			<div className={s.mixes}>
				{mixes.data.map((mix: any, index: number) => (
					<div key={`${index}-${mix.name}`} className={s.wrapper}>
						<MixItem mix={mix} />
					</div>
				))}
			</div>
		);
	} else {
		return null;
	}
};

MixList.propTypes = {
	mixes: PropTypes.object,
};

export default MixList;
