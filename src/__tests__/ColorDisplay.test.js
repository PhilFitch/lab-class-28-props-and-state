import React from 'react';
import { shallow } from 'enzyme';
import ColorDisplay from '../components/colors/ColorDisplay';

describe('ColorDisplay component', () => {
  it('renders ColorDisplay', () => {
    const wrapper = shallow(<ColorDisplay backgroundColor='blue' />);
    expect(wrapper).toMatchSnapshot();
  });
});
