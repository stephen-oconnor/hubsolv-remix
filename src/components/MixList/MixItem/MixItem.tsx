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
		<div className={s.mix}>
			<div className={s.image}>
				<MixImage src={mix.pictures.large} altTag={mix.name} />
			</div>
			<div className={s.details}>
				<MixDetails
					name={mix.name}
					artist={mix.user.name}
					artistUrl={mix.user.url}
					playCount={mix.play_count}
					duration={mix.audio_length}
					created={mix.created_time}
					url={mix.url}
				/>
			</div>
		</div>
	);
};

MixItem.propTypes = {
	mix: PropTypes.object.isRequired,
};

export default MixItem;
