// import { all, takeEvery, put, call, fork } from 'redux-saga/effects';
// import api from './api';
// import { FETCH_IMAGES, FETCH_IMAGES_SUCCESS } from './constants';

// export function* fetchImages({ term }) {
//   const response = yield call(api.get, '/search/photos', {
//     params: { query: term },
//   });
//   yield put({ type: FETCH_IMAGES_SUCCESS, payload: response.data.results });
// }

// export function* watchFetchImages() {
//   yield takeEvery(FETCH_IMAGES, fetchImages);
// }

// export default function* imagesRootSaga() {
//   yield all([fork(watchFetchImages)]);
// }

import { all } from 'redux-saga/effects';
import imageSaga from './imageSaga'
export default function* rootSaga() {
  yield all([imageSaga()]);
}
