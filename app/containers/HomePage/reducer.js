/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { combineReducers } from 'redux';
import { CHANGE_USERNAME, INCREMENT, DECREMENT } from './constants';

// The initial state of the App
export const initialState = {
  username: '',
  count: 0,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_USERNAME:
        // Delete prefixed '@' from the github usernamem
        draft.username = action.username.replace(/@/gi, '');
        break;
    }
  });

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default combineReducers({
  homeReducer,
  count: counterReducer,
});
