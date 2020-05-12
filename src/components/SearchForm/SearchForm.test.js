import React from 'react';
import SearchForm from './SearchForm';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<SearchForm />', () => {
	const onSubmitMock = jest.fn();
	const props = {
		loading: false,
		errors: {},
		onChange: jest.fn(),
		onSubmit: onSubmitMock,
	};

	const event = {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		preventDefault() {},
	};

	it('matches the snapshot', () => {
		const tree = shallow(<SearchForm {...props} />);
		expect(toJson(tree)).toMatchSnapshot();
	});

	it('should call on submit when form is submitted, not submit the form', () => {
		const wrapper = shallow(<SearchForm {...props} />);

		wrapper.find('form').simulate('submit', event);

		expect(onSubmitMock).toBeCalledWith(event);
	});
});
