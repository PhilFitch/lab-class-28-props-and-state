import React from 'react';
import { shallow } from 'enzyme';
import ColorChanger from '../components/colors/ColorChanger';

describe('ColorChanger component', () => {
  it('renders ColorChanger', () => {
    const wrapper = shallow(<ColorChanger backgroundColor='blue' />);
    expect(wrapper).toMatchSnapshot();
  });
});
