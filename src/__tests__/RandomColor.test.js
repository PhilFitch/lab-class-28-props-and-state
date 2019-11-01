import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from '../containers/RandomColor';

describe('RandomColor component', () => {
  it('renders RandomColor', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
