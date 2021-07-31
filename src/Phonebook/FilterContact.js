import React from 'react';
import PropTypes from 'prop-types';

const FilterContact = ({ value, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        title="Search contacts"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterContact;
