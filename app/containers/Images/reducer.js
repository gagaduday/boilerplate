import { combineReducers } from 'redux';
import { FETCH_IMAGES_SUCCESS } from './constants';

const fetchImagesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  images: fetchImagesReducer,
});
