import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from './actions';

const Counter = props => (
  <div>
    <button onClick={props.increase}>Increment</button>
    <button onClick={props.decrease}>Decrement</button>
    <p>Current count</p>
    {props.count}
  </div>
);

const mapStateToProps = state => ({
  count: state.count,
});

export default connect(
  mapStateToProps,
  { increase, decrease },
)(Counter);
