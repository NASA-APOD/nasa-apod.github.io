import React from 'react';
import PropTypes from 'prop-types';

const CountDisplay = ({ count }) => {
  return (
    <>
      <span>Count: </span>
      <span>{count}</span>
    </>
  );
};

CountDisplay.propTypes = {
  count: PropTypes.number.isRequired
};

export default CountDisplay;
