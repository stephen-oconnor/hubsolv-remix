import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

interface MixImageProps {
	src: string;
	alt: string;
}

const MixImage: React.SFC<MixImageProps> = ({ src, alt }) => {
	return <img src={src} alt={alt} className={s.image} />;
};

MixImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default MixImage;
