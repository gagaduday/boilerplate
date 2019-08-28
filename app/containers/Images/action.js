import { FETCH_IMAGES } from './constants';

export const fetchImages = term => {
  return { type: FETCH_IMAGES, term };
};
