import React from 'react';
import PropTypes from 'prop-types';

interface IconTimeProps {
	width?: number;
	height?: number;
	fill?: string;
}

const IconTime: React.SFC<IconTimeProps> = ({ width = 30, height = 30, fill = '#000000' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			width={width}
			height={height}
			aria-label={'Time Icon'}
			role={'presentation'}
		>
			<path
				d="M256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256S397.159,0,256,0z M256,468.732
			c-117.301,0-212.732-95.431-212.732-212.732S138.699,43.268,256,43.268S468.732,138.699,468.732,256S373.301,468.732,256,468.732z
			"
				fill={fill}
			/>

			<path
				d="M372.101,248.068H271.144V97.176c0-11.948-9.686-21.634-21.634-21.634c-11.948,0-21.634,9.686-21.634,21.634v172.525
			c0,11.948,9.686,21.634,21.634,21.634c0.244,0,0.48-0.029,0.721-0.036c0.241,0.009,0.477,0.036,0.721,0.036h121.149
			c11.948,0,21.634-9.686,21.634-21.634S384.049,248.068,372.101,248.068z"
				fill={fill}
			/>
		</svg>
	);
};

IconTime.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
};

export default IconTime;
