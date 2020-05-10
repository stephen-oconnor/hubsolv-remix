import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

interface MixImageProps {
	src: string;
	altTag: string;
}

const MixImage: React.FC<MixImageProps> = ({ src, altTag }) => {
	return <img src={src} alt={altTag} className={s.image} />;
};

MixImage.propTypes = {
	src: PropTypes.string.isRequired,
	altTag: PropTypes.string.isRequired,
};

export default MixImage;
