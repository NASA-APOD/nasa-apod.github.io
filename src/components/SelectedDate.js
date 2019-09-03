import React from 'react';
import PropTypes from 'prop-types';

const SelectedDate = ({ date }) => {
  return (
    <section>
      <h3>Selected Date:</h3>
      <p>{date}</p>
    </section>
  );
};

SelectedDate.propTypes = {
  date: PropTypes.string.isRequired
};

export default SelectedDate;
