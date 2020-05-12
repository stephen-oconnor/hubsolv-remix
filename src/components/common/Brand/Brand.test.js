import React from 'react';
import Brand from './Brand';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<Brand />', () => {
	it('matches the snapshot', () => {
		const tree = shallow(<Brand />);
		expect(toJson(tree)).toMatchSnapshot();
	});

	it('should contain 1 h1 element', () => {
		const wrapper = shallow(<Brand />);
		expect(wrapper.find('h1').length).toBe(1);
	});

	it('should have an h1 with correct text', () => {
		const wrapper = shallow(<Brand />);
		expect(wrapper.find('h1').text()).toBe('ReMix');
	});
});
