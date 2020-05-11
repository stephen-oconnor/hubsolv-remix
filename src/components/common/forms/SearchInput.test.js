import React from 'react';
import SearchInput from './SearchInput';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchInput />', () => {
	const mockChange = jest.fn();
	const props = {
		name: 'search',
		label: 'Search',
		onChange: mockChange,
		value: '',
		error: 'A search term is required.',
	};

	it('should render the input correctly', () => {
		const wrapper = shallow(<SearchInput {...props} />);

		expect(wrapper.find('input').props().name).toEqual('search');
		expect(wrapper.find('input').props().value).toEqual('');
	});

	it('should render a label', () => {
		const wrapper = shallow(<SearchInput {...props} />);

		expect(wrapper.find('label').text()).toEqual('Search');
	});

	it('should render an error if error', () => {
		const wrapper = shallow(<SearchInput {...props} />);

		expect(wrapper.find('p').length).toBe(1);
	});
});
