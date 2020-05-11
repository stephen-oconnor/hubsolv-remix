import React from 'react';
import MixImage from './MixImage';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<MixImage />', () => {
	it('matches the snapshot', () => {
		const tree = shallow(<MixImage src={'test-path.jpg'} alt={'Something meaningful'} />);
		expect(toJson(tree)).toMatchSnapshot();
	});

	it('should contain 1 img element', () => {
		const wrapper = shallow(<MixImage src={'test-path.jpg'} alt={'Something meaningful'} />);
		expect(wrapper.find('img').length).toBe(1);
	});

	it('img element should have a src and alt', () => {
		const wrapper = shallow(<MixImage src={'test-path.jpg'} alt={'Something meaningful'} />);

		expect(wrapper.find({ src: 'test-path.jpg' }).length).toBe(1);
		expect(wrapper.find({ alt: 'Something meaningful' }).length).toBe(1);
	});
});
