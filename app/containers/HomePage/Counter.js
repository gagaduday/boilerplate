import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions';

const Counter = props => (
  <div>
    <button type="button" onClick={props.increase}>
      Increment
    </button>
    <button type="button" onClick={props.decrease}>
      Decrement
    </button>
    <p>Current count</p>
    {props.count}
  </div>
);

const mapStateToProps = state => ({
  count: state.home ? state.home.counterReducer.count : 0,
});

export default connect(
  mapStateToProps,
  { increase, decrease },
)(Counter);
