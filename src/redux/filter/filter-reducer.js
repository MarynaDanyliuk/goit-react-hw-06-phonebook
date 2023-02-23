import { createReducer } from '@reduxjs/toolkit';

import { setFilter } from './filter-actions';
// import { setFilter } from 'redux/filter/filter-actions';

const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});

export default filterReducer;
