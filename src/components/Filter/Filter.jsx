import css from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from '../../redux/filter/filter-slice';

export const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

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

// import React from 'react';
// import PropTypes from 'prop-types';
// Filter.propTypes = {
//   filter: PropTypes.string,
//   handleFilter: PropTypes.func.isRequired,
// };
