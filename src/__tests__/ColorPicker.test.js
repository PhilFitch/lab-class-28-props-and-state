import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../components/colors/ColorPicker';

const color = ['red', 'blue'];
const selectColor = jest.fn();

describe('ColorPicker component', () => {
  it('renders ColorPicker', () => {
    
    const wrapper = shallow(<ColorPicker colors={color} selectColor={selectColor} />);
    expect(wrapper).toMatchSnapshot();
  });
});
