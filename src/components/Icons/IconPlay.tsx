import React from 'react';
import PropTypes from 'prop-types';

interface IconPlayProps {
	width?: number;
	height?: number;
	fill?: string;
}

const IconPlay: React.SFC<IconPlayProps> = ({ width = 30, height = 30, fill = '#000000' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 485.74 485.74"
			width={width}
			height={height}
			aria-label={'Play Icon'}
			role={'presentation'}
		>
			<path
				d="M242.872,0C108.732,0,0.004,108.736,0.004,242.864c0,134.14,108.728,242.876,242.868,242.876
			c134.136,0,242.864-108.736,242.864-242.876C485.736,108.736,377.008,0,242.872,0z M338.412,263.94l-134.36,92.732
			c-16.776,11.588-30.584,4.248-30.584-16.316V145.38c0-20.556,13.808-27.9,30.584-16.312l134.32,92.732
			C355.136,233.384,355.176,252.348,338.412,263.94z"
				fill={fill}
			/>
		</svg>
	);
};

IconPlay.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
};

export default IconPlay;
