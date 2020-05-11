import React from 'react';
import PropTypes from 'prop-types';
import IconPlay from '../../Icons/IconPlay';
import IconTime from '../../Icons/IconTime';
import calculateDuration from '../../../utils/calculateDuration';
import calculateCreatedTime from '../../../utils/calculateCreatedTime';
import s from './styles.module.scss';

interface MixDetailsProps {
	name: string;
	artist: string;
	artistUrl: string;
	playCount: number;
	duration: number;
	created: string;
	url: string;
}

const MixDetails: React.FC<MixDetailsProps> = ({
	name,
	artist,
	artistUrl,
	playCount,
	duration,
	created,
	url,
}) => {
	return (
		<div className={s.details}>
			<h3 className={s.title}>
				<a href={url} target="_blank" rel="noopener noreferrer" className={s.link}>
					{name}
				</a>
			</h3>
			<p className={s.artist}>
				<a href={artistUrl} target="_blank" rel="noopener noreferrer">
					{artist}
				</a>
			</p>
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
	name: PropTypes.string.isRequired,
	artist: PropTypes.string.isRequired,
	artistUrl: PropTypes.string.isRequired,
	playCount: PropTypes.number.isRequired,
	duration: PropTypes.number.isRequired,
	created: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default MixDetails;
