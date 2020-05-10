import React from 'react';
import PropTypes from 'prop-types';

interface IconSearchProps {
	width?: number;
	height?: number;
	fill?: string;
}

const IconSearch: React.SFC<IconSearchProps> = ({ width = 30, height = 30, fill = '#000000' }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 2 98 98"
			width={width}
			height={height}
			aria-label={'Search Icon'}
			role={'presentation'}
		>
			<path
				fill={fill}
				d="M88.7,86.5L69,66.7c5-6,8-13.6,8-22c0-18.9-15.4-34.3-34.3-34.3c-18.9,0-34.3,15.4-34.3,34.3,C8.4,63.5,23.8,79,42.7,79c8.4,0,16.1-3,22-8l19.8,19.8c0.6,0.6,1.4,0.9,2.1,0.9c0.7,0,1.5-0.3,2.1-0.9   C89.9,89.5,89.9,87.5,88.7,86.5z M62.9,64.5c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-5.1,5-12.1,8.1-19.8,8.1   c-15.6,0-28.3-12.7-28.3-28.3c0-15.6,12.7-28.3,28.3-28.3C58.3,16.3,71,29,71,44.7C71,52.3,67.9,59.3,62.9,64.5z"
			/>
		</svg>
	);
};

IconSearch.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	fill: PropTypes.string.isRequired,
};

export default IconSearch;
