import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

interface MixImageProps {
	src: string;
	altTag: string;
}

const MixImage: React.FC<MixImageProps> = ({ src, altTag }) => {
	return (
		<div className={s.cover}>
			<img src={src} alt={altTag} />
		</div>
	);
};

MixImage.propTypes = {
	src: PropTypes.string.isRequired,
	altTag: PropTypes.string.isRequired,
};

export default MixImage;
