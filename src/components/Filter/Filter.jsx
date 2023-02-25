// import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

import { useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/filter-selectors';

export const Filter = ({ handleFilter }) => {
  const filter = useSelector(getFilter);
  return (
    <div className={css.form}>
      <label className={css.form_label}>
        Fined contacts by name
        <input
          className={css.form_input}
          type="text"
          name="filter"
          value={filter}
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
