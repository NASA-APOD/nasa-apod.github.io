import React from 'react';
import PropTypes from 'prop-types';

const DateForm = ({ handleUpdate, handleSubmit, date }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        name="date" 
        value={date} 
        onChange={handleUpdate}
      />
      <button>Submit</button>
    </form>
  );
};

DateForm.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  date: PropTypes.string
};

export default DateForm;
