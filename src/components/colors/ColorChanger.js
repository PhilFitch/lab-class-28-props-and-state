import React from 'react';
import PropTypes from 'prop-types';

const ColorChanger = ({ backgroundColor }) => (
  <div style={{ 
    height: '200px', 
    width: '200px', 
    backgroundColor
  }}></div>
);

ColorChanger.propTypes = {
  backgroundColor: PropTypes.string.isRequired
};

export default ColorChanger;
