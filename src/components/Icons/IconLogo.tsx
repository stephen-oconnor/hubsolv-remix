import React from 'react';
import PropTypes from 'prop-types';

interface IconLogoProps {
	width?: number;
	height?: number;
	fill?: string;
}

const IconLogo: React.SFC<IconLogoProps> = ({ width = 30, height = 30, fill = '#ffffff' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 -30 512 512"
			width={width}
			height={height}
			aria-label={'ReMix logo'}
			role={'presentation'}
		>
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="256" x2="256" y1="0" y2="452">
				<stop offset="0" stopColor="#ff9300" />
				<stop offset="1" stopColor="#ffc12e" />
			</linearGradient>

			<path
				d="m0 160h40v132h-40zm79 212h40v-292h-40zm78 80h40v-452h-40zm78-160h40v-132h-40zm79 110h40v-352h-40zm158-242v142h40v-142zm-79 292h40v-452h-40zm0 0"
				fill="url(#a)"
			/>
		</svg>
	);
};

IconLogo.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
};

export default IconLogo;
