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
			viewBox="0 0 515.558 515.558"
			width={width}
			height={height}
			aria-label={'Search Icon'}
			role={'presentation'}
		>
			<path
				d="m378.344 332.78c25.37-34.645 40.545-77.2 40.545-123.333 0-115.484-93.961-209.445-209.445-209.445s-209.444 93.961-209.444 209.445 93.961 209.445 209.445 209.445c46.133 0 88.692-15.177 123.337-40.547l137.212 137.212 45.564-45.564c0-.001-137.214-137.213-137.214-137.213zm-168.899 21.667c-79.958 0-145-65.042-145-145s65.042-145 145-145 145 65.042 145 145-65.043 145-145 145z"
				fill={fill}
			/>
		</svg>
	);
};

IconSearch.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
	fill: PropTypes.string,
};

export default IconSearch;
