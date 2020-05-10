import React from 'react';
import PropTyoes from 'prop-types';
import IconPlay from '../../Icons/IconPlay';
import IconTime from '../../Icons/IconTime';
import calculateDuration from '../../../utils/calculateDuration';
import calculateCreatedTime from '../../../utils/calculateCreatedTime';
import s from './styles.module.scss';

interface MixDetailsProps {
	name: string;
	artist: string;
	playCount: number;
	duration: number;
	created: string;
}

const MixDetails: React.FC<MixDetailsProps> = ({ name, artist, playCount, duration, created }) => {
	return (
		<div className={s.details}>
			<h3 className={s.title}>{name}</h3>
			<p className={s.artist}>{artist}</p>
			<div className={s.info}>
				<p className={s.item}>
					<span className={s.icon}>
						<IconPlay width={13} height={13} />
					</span>{' '}
					{playCount}
				</p>
				<p className={`${s.item} ${s['item--duration']}`}>
					<span className={s.icon}>
						<IconTime width={13} height={13} />
					</span>{' '}
					{calculateDuration(duration)}
				</p>
				<p className={s.item}>{calculateCreatedTime(created)}</p>
			</div>
		</div>
	);
};

MixDetails.propTypes = {
	name: PropTyoes.string.isRequired,
	artist: PropTyoes.string.isRequired,
	playCount: PropTyoes.number.isRequired,
	duration: PropTyoes.number.isRequired,
	created: PropTyoes.string.isRequired,
};

export default MixDetails;
