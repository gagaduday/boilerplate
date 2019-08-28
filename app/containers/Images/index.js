// import React from 'react';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import { fetchImages } from './action';
// import saga from './saga';
// import reducer from './reducer';
// import SearchBar from './SearchBar';
// import ImageList from './ImageList';

// export class Images extends React.Component {
//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <ImageList images={this.props.images} />
//       </div>
//     );
//   }
// }

// const withSaga = useInjectSaga({ key: 'Images', saga });

// const witReducer = useInjectReducer({ key: 'Images', reducer });

// export default compose(
//   withConnect,
//   withSaga,
//   witReducer,
// )(Images);

// import React from 'react';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createSagaMiddleware from 'redux-saga';
// import reducers from './reducer';
// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
// import imagesRootSaga from './saga';
// import App from './App';

// // export function ReduxSaga() {
// //   useInjectReducer({ key: 'reduxSaga', reducer });
// //   useInjectSaga({ key: 'reduxSaga', saga });

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(imagesRootSaga);

// export function Images() {
//   return (
//     <div>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </div>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import makeSelectReduxSaga from './selector';
import reducer from './reducer';
import saga from './saga';
import messages from './message';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export function ReduxSaga() {
  useInjectReducer({ key: 'reduxSaga', reducer });
  useInjectSaga({ key: 'reduxSaga', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
}

ReduxSaga.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  reduxSaga: makeSelectReduxSaga(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ReduxSaga);
