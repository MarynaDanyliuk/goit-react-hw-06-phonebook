import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, handleFilter }) => {
  return (
    <div className={css.form}>
      <label className={css.form_label}>
        Fined contacts by name
        <input
          className={css.form_input}
          type="text"
          name="filter"
          value={value}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
};
