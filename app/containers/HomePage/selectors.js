/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState, countState } from './reducer';
// import { countState } from './counterReducer';

const selectHome = state => state.home || initialState;
const count = state => state.count || countState;

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    count,
    homeState => homeState.username,
    counter => counter.count,
  );

export { selectHome, makeSelectUsername };
