import React from 'react';
import PropTypes from 'prop-types';
import MixImage from '../MixImage/MixImage';
import MixDetails from '../MixDetails/MixDetails';
import s from './styles.module.scss';

interface MixItemProps {
	mix: any;
}

const MixItem: React.FC<MixItemProps> = ({ mix }) => {
	return (
		<div className={s.wrapper}>
			<MixImage src={mix.pictures['640wx640h']} altTag={mix.name} />
			<MixDetails
				name={mix.name}
				artist={mix.user.name}
				playCount={mix.play_count}
				duration={mix.audio_length}
				created={mix.created_time}
			/>
		</div>
	);
};

MixItem.propTypes = {
	mix: PropTypes.object.isRequired,
};

export default MixItem;
