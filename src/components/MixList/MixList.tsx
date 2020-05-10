import React from 'react';
import PropTypes from 'prop-types';
import MixItem from './MixItem/MixItem';

interface MixListProps {
	mixes: any;
}

const MixList: React.FC<MixListProps> = ({ mixes }) => {
	if (mixes && mixes.data && mixes.data.length > 0) {
		return mixes.data.map((mix: any, index: number) => (
			<MixItem key={`${index}-${mix.name}`} mix={mix} />
		));
	} else {
		return null;
	}
};

MixList.propTypes = {
	mixes: PropTypes.object,
};

export default MixList;
